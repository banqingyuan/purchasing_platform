package kb.javaproject.purchasingplatform;

import kb.javaproject.purchasingplatform.domain.Buyer;
import kb.javaproject.purchasingplatform.domain.Goods;
import kb.javaproject.purchasingplatform.domain.Order;
import kb.javaproject.purchasingplatform.domain.OrderGoods;
import kb.javaproject.purchasingplatform.mapper.GoodsMapper;
import kb.javaproject.purchasingplatform.mapper.OrderMapper;
import kb.javaproject.purchasingplatform.service.RegisterService;
import kb.javaproject.purchasingplatform.util.OrderState;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@SpringBootTest
public class ServiceTest {
    @Autowired
    RegisterService registerService;
    @Test
    public void testRegisterService(){
        Buyer buyer=new Buyer();
        buyer.setName("hhh");
        registerService.buyerRegister(buyer);
    }

    @Autowired
    GoodsMapper goodsMapper;
    @Autowired
    OrderMapper orderMapper;
    @Test
    public void test(){

        List<Order> orderList = new ArrayList<>();
        Order order1=new Order();
        order1.setId(1);
        order1.setAmount(new BigDecimal(23));
        Order order2=new Order();
        order2.setId(1);
        order2.setAmount(new BigDecimal(23));
        orderList.add(order1);
        orderList.add(order2);
        orderMapper.updateOrdersAmount(orderList);


        List<Order> orders = new ArrayList<>();
        for (int i=0;i<4;i++){
            Order order=new Order();
            order.setBuyerid(i);
            order.setSuplierid(2*i);
            order.setState(OrderState.outstanding.toString());
            order.setBegin(new Date());
            order.setExpect(new Date());
            order.setAmount(new BigDecimal(0));
            orders.add(order);
        }
        orderMapper.insertOrders(orders);


        Order order=new Order();
        order.setBegin(new Date());
        order.setEnd(new Date());

        orderMapper.insert(order);
        List<OrderGoods> listO=new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            OrderGoods orderGoods=new OrderGoods();
            orderGoods.setOrderid(1);
            orderGoods.setGoodsid(i);
            orderGoods.setWeight(500);
            listO.add(orderGoods);
        }
        orderMapper.insertOrderGoods(listO);


        List<Goods> list=new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            Goods goods=new Goods();
            goods.setId(i);
            goods.setInventory(i*10);
            list.add(goods);
        }
        goodsMapper.updateInventory(list);

    }
}
