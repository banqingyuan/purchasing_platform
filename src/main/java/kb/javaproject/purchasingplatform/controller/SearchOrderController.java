package kb.javaproject.purchasingplatform.controller;

import com.alibaba.fastjson.JSONObject;
import kb.javaproject.purchasingplatform.domain.Order;
import kb.javaproject.purchasingplatform.service.SearchOrderService;
import kb.javaproject.purchasingplatform.util.OrderState;
import kb.javaproject.purchasingplatform.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class SearchOrderController {
    @Autowired
    SearchOrderService searchOrderService;
    @GetMapping("/searchOrderById")
    public String searchOrderById(@RequestParam Integer id,HttpSession session){
        Integer userID = (Integer) session.getAttribute("id");
        UserType userType= (UserType) session.getAttribute("UserType");
        Order order =searchOrderService.searchOrderById(id, userID,userType);
        return JSONObject.toJSONString(order);
    }
    @GetMapping("/searchOrderAllInfoById")
    public String searchOrderAllInfoById(@RequestParam Integer id,HttpSession session){
        Integer userID = (Integer) session.getAttribute("id");
        UserType userType= (UserType) session.getAttribute("UserType");
        Order order =searchOrderService.searchOrderAllInfoById(id,userID,userType);
        return JSONObject.toJSONString(order);
    }
    @RequestMapping("/searchOrder")
    public String searchOrder(OrderState state, Integer page, HttpSession session){
        Integer userID = (Integer) session.getAttribute("id");
        UserType userType= (UserType) session.getAttribute("UserType");
        List<Order> orders= searchOrderService.searchOrder(state,page,userType,userID);
        return JSONObject.toJSONString(orders);
    }
}
