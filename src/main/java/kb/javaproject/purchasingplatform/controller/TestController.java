package kb.javaproject.purchasingplatform.controller;

import com.alibaba.fastjson.JSONObject;
import kb.javaproject.purchasingplatform.component.ThreadLocalExtension;
import kb.javaproject.purchasingplatform.domain.Buyer;
import kb.javaproject.purchasingplatform.domain.BuyerExample;
import kb.javaproject.purchasingplatform.domain.SupplierExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Random;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    ThreadLocalExtension<BuyerExample> buyerExampleThreadLocal;
    @Autowired
    ThreadLocalExtension<SupplierExample> supplierExampleThreadLocal;
    @RequestMapping("/testExample")
    public void testExample(){
        BuyerExample b=buyerExampleThreadLocal.get(BuyerExample.class);
        BuyerExample.Criteria criteria = b.createCriteria();
        criteria.andEmailEqualTo("123");
        b.clear();

    }


    ThreadLocal<BuyerExample> exampleThreadLocal = new ThreadLocal<>();
    @Autowired
    BuyerExample buyerExample;

    @RequestMapping("/test")
    public String test() {
        exampleThreadLocal.get();
        Random random = new Random();
        BuyerExample.Criteria criteria = buyerExample.createCriteria();
        criteria.andEmailEqualTo(String.valueOf(random.doubles()));
        System.out.println("2111");
        System.out.println("hello");
        return "hello";
    }

    @RequestMapping("/para")
    public String para(@RequestParam("name") String name, @RequestParam("email") String email) {
        return "ss";
    }

    @RequestMapping("/pbean")
    public String pbean(@RequestBody JSONObject params) {
        //Map map= request.getParameterMap();
        //Buyer buyer= JSON.parseObject(params,Buyer.class)
        Buyer buyer = JSONObject.parseObject(params.toString(), Buyer.class);
        return "aa";
    }

    @RequestMapping("/session")
    public boolean se(HttpSession session) {
        if (((String) session.getAttribute("login")) == null) {
            session.setAttribute("login", "true");
            return false;
        }

        return true;
    }
}
