package kb.javaproject.purchasingplatform.controller;

import com.alibaba.fastjson.JSONObject;
import kb.javaproject.purchasingplatform.domain.Buyer;
import kb.javaproject.purchasingplatform.domain.Supplier;
import kb.javaproject.purchasingplatform.service.LoginService;
import kb.javaproject.purchasingplatform.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class LoginController {
    @Autowired
    LoginService loginService;
    @RequestMapping("/buyerLogin")
    public boolean buyerLogin(@RequestBody JSONObject params, HttpSession session){
        Buyer buyer = JSONObject.parseObject(params.toString(), Buyer.class);
        boolean login= loginService.buyLogin(buyer);
        if (login) {
            session.setAttribute("id",buyer.getId());
            session.setAttribute("UserType", UserType.Buyer);
        }
        return login;
    }
    @RequestMapping("/supplierLogin")
    public boolean supplierLogin(@RequestBody JSONObject params, HttpSession session){
        Supplier supplier = JSONObject.parseObject(params.toString(), Supplier.class);
        boolean login= loginService.supplierLogin(supplier);
        if (login) {
            session.setAttribute("id",supplier.getId());
            session.setAttribute("UserType", UserType.Supplier);
        }
        return login;
    }
}
