package kb.javaproject.purchasingplatform.controller;

import com.alibaba.fastjson.JSONObject;
import kb.javaproject.purchasingplatform.domain.Buyer;
import kb.javaproject.purchasingplatform.domain.Supplier;
import kb.javaproject.purchasingplatform.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {
    @Autowired
    RegisterService registerService;
    @RequestMapping("/buyerRegister")
    public boolean buyRegister(@RequestBody JSONObject params){
        Buyer buyer = JSONObject.parseObject(params.toString(), Buyer.class);
        return registerService.buyerRegister(buyer);
    }
    @RequestMapping("/supplierRegister")
    public boolean supplierRegister(@RequestBody JSONObject params){
        Supplier supplier = JSONObject.parseObject(params.toString(), Supplier.class);
        return registerService.supplierRegister(supplier);
    }
}
