package kb.javaproject.purchasingplatform.service;

import com.github.pagehelper.PageHelper;
import kb.javaproject.purchasingplatform.component.ThreadLocalExtension;
import kb.javaproject.purchasingplatform.domain.Order;
import kb.javaproject.purchasingplatform.domain.OrderExample;
import kb.javaproject.purchasingplatform.domain.Supplier;
import kb.javaproject.purchasingplatform.mapper.BuyerMapper;
import kb.javaproject.purchasingplatform.mapper.OrderMapper;
import kb.javaproject.purchasingplatform.mapper.SupplierMapper;
import kb.javaproject.purchasingplatform.util.GlobalConstant;
import kb.javaproject.purchasingplatform.util.OrderState;
import kb.javaproject.purchasingplatform.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Service
public class SearchOrderService {

    @Autowired
    OrderMapper orderMapper;
    @Autowired
    ThreadLocalExtension<OrderExample> orderExampleThreadLocal;
    public Order searchOrderById(Integer id, Integer userID, UserType userType){

        OrderExample orderExample = orderExampleThreadLocal.get(OrderExample.class);
        OrderExample.Criteria criteria = orderExample.createCriteria();

        //添加判断订单是否为查询者所拥有，即是否拥有访问权限
        setLimitation(userType,userID,criteria);
        criteria.andIdEqualTo(id);

        List<Order> orders=orderMapper.selectByExample(orderExample);

        orderExample.clear();
        return orders.size()!=0?orders.get(0):null;
    }

    @Autowired
    BuyerMapper buyerMapper;
    @Autowired
    SupplierMapper supplierMapper;
    public Order searchOrderAllInfoById(Integer id,Integer userID,UserType userType){
        Order order=searchOrderById(id,userID,userType);

        if (order!=null){
            order.setGoodsList(orderMapper.selectGoodsOfOrder(id));
            order.setBuyer(buyerMapper.selectByPrimaryKey(order.getBuyerid()));
            order.setSupplier(supplierMapper.selectByPrimaryKey(order.getSuplierid()));
        }

        return order;
    }

    public List searchOrder(OrderState state,Integer page,UserType userType,Integer userID){
        OrderExample orderExample = orderExampleThreadLocal.get(OrderExample.class);
        OrderExample.Criteria criteria = orderExample.createCriteria();
        setLimitation(userType,userID,criteria);
        if (state!=null){
            criteria.andStateEqualTo(state.toString());
        }

        page= page==null?0:page-1;
        PageHelper.startPage(page, GlobalConstant.OrderPageSize);
        List<Order> orders = orderMapper.selectByExample(orderExample);
        return orders;
    }
    public void setLimitation(UserType userType,Integer userID,OrderExample.Criteria criteria){
        //判断订单是否为查询者所拥有，即是否拥有访问权限
        if(userType==UserType.Buyer){
            criteria.andBuyeridEqualTo(userID);
        }else if (userType==UserType.Supplier){
            criteria.andSuplieridEqualTo(userID);
        }
    }
}
