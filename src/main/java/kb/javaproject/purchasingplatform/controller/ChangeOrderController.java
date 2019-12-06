package kb.javaproject.purchasingplatform.controller;

import com.alibaba.fastjson.JSONObject;
import kb.javaproject.purchasingplatform.domain.InitOrderInfo;
import kb.javaproject.purchasingplatform.service.ChangeGoodsService;
import kb.javaproject.purchasingplatform.service.ChangeOrderService;
import kb.javaproject.purchasingplatform.util.OrderState;
import kb.javaproject.purchasingplatform.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
public class ChangeOrderController {
    @Autowired
    ChangeOrderService changeOrderService;
    @GetMapping("/updateOrder")
    public boolean updateOrder(@RequestParam Integer id , HttpSession session){
        Integer userID = (Integer) session.getAttribute("id");
        UserType userType= (UserType) session.getAttribute("UserType");
        return changeOrderService.updateOrder(id, userType, userID);

    }

    @PostMapping("/createOrder")
    public boolean createOrder(@RequestBody JSONObject params, HttpSession session) {
        InitOrderInfo orderInfo = JSONObject.parseObject(params.toString(), InitOrderInfo.class);
        if (session.getAttribute("UserType")!=UserType.Buyer)
            return false;
        Integer buyerID= (Integer) session.getAttribute("id");
        return changeOrderService.createOrder(orderInfo, buyerID);
    }
}
