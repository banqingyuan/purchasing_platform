package kb.javaproject.purchasingplatform.service;

import com.sun.org.apache.xpath.internal.operations.Or;
import kb.javaproject.purchasingplatform.component.ThreadLocalExtension;
import kb.javaproject.purchasingplatform.domain.*;
import kb.javaproject.purchasingplatform.mapper.GoodsMapper;
import kb.javaproject.purchasingplatform.mapper.OrderMapper;
import kb.javaproject.purchasingplatform.util.OrderState;
import kb.javaproject.purchasingplatform.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.constraints.Max;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class ChangeOrderService {

    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private ThreadLocalExtension<OrderExample> orderExampleThreadLocal;
    @Autowired
    SearchOrderService searchOrderService;
    @Autowired
    GoodsMapper goodsMapper;
    @Autowired
    ThreadLocalExtension<GoodsExample> goodsExampleThreadLocal;

    @Transactional
    public boolean updateOrder(Integer orderID,UserType userType, Integer userID) {
        OrderExample orderExample = orderExampleThreadLocal.get(OrderExample.class);
        OrderExample.Criteria criteria = orderExample.createCriteria();
        criteria.andIdEqualTo(orderID);
        Order updateOrder=new Order();
        //限制用户仅可以修改自己拥有的订单
         if (userType == UserType.Buyer)
         {
             //仅允许供应商将订单状态修改为正在配送
             criteria.andBuyeridEqualTo(userID);
             updateOrder.setState(OrderState.completed.toString());
             //更新库存
             List<Goods> list= orderMapper.selectGoodsOfOrder(orderID);
             goodsMapper.updateInventory(list);
         }
         else if (userType == UserType.Supplier)
         {
             //仅允许采购员将订单状态修改为已完成
             criteria.andSuplieridEqualTo(userID);
             updateOrder.setState(OrderState.delivering.toString());
             updateOrder.setEnd(new Date());
         }

        int update= orderMapper.updateByExampleSelective(updateOrder, orderExample);

        return update!=0;
    }

    @Transactional
    public boolean createOrder(InitOrderInfo initOrderInfo, Integer buyerID){

        HashMap<Integer,Integer> goodsMap=initOrderInfo.getGoodsMap();
        //获取详细的货品信息
        List<Goods> goodsList=getGoodsInfo(goodsMap);
        //根据供应商拆分订单<supplierID,order>
        HashMap<Integer,Order> initOrders = getInitOrders(goodsList,buyerID,initOrderInfo.getExpect());

        List<OrderGoods> orderGoodsList=new ArrayList<>();

        for (Goods goods:goodsList){
            OrderGoods orderGoods=new OrderGoods();
            orderGoods.setGoodsid(goods.getId());
            orderGoods.setWeight(goods.getInventory());
            Order order= initOrders.get(goods.getSupplierid());
            orderGoods.setOrderid(order.getId());
            //更新订单金额
            BigDecimal goodsAmount = new BigDecimal(goods.getInventory()).multiply(goods.getPrice());
            order.setAmount(order.getAmount().add(goodsAmount));
            orderGoodsList.add(orderGoods);
        }
        //在数据库中更新订单金额
        List<Order> orderList= new ArrayList<>(initOrders.values()) ;
        //
        orderMapper.insertOrderGoods(orderGoodsList);
        orderMapper.updateOrdersAmount(orderList);
        return true;
    }
    public HashMap<Integer,Order> getInitOrders(List<Goods> goodsList,Integer buyerID,Date expect){
        //根据供应商拆分出订单

        HashMap<Integer, Order> initOrders = new HashMap<>();
        for (Goods goods:goodsList) {
            Integer supplierID=goods.getSupplierid();
            if (!initOrders.containsKey(supplierID)){
                Order order=new Order();

                order.setBuyerid(buyerID);
                order.setSuplierid(supplierID);
                order.setState(OrderState.outstanding.toString());
                order.setBegin(new Date());
                order.setExpect(expect);
                order.setAmount(new BigDecimal(0));

                initOrders.put(supplierID, order);
            }
        }
        List<Order> orderList= new ArrayList<>(initOrders.values()) ;
        orderMapper.insertOrders(orderList);
        return initOrders;
    }
    //根据<id,weight> 获取详细的货品信息
    public List<Goods> getGoodsInfo(HashMap<Integer,Integer> goodsMap){
        GoodsExample goodsExample = goodsExampleThreadLocal.get(GoodsExample.class);
        GoodsExample.Criteria criteria = goodsExample.createCriteria();
        List<Integer> goodsID = new ArrayList<>(goodsMap.keySet());
        criteria.andIdIn(goodsID);
        List<Goods> goodsList = goodsMapper.selectByExample(goodsExample);
        for (Goods goods:goodsList
        ) {
            goods.setInventory(goodsMap.get(goods.getId()));
        }
        return goodsList;
    }

    public boolean checkLimitation(OrderState newState, UserType userType,OrderExample.Criteria criteria) {
        //仅允许供应商将订单状态修改为正在配送
        if (newState == OrderState.delivering && userType == UserType.Supplier)
            return true;
            //仅允许采购员将订单状态修改为已完成
        else if (newState == OrderState.completed && userType == UserType.Buyer)
            return true;

        return false;
    }

}
