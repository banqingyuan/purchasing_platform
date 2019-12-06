package kb.javaproject.purchasingplatform.controller;

import com.alibaba.fastjson.JSONObject;
import kb.javaproject.purchasingplatform.domain.Goods;
import kb.javaproject.purchasingplatform.service.ChangeGoodsService;
import kb.javaproject.purchasingplatform.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController

public class ChangeGoodsController {
    @Autowired
    private ChangeGoodsService changeGoodsService;

    @RequestMapping("/addGoods")
    public boolean addGoods(@RequestBody JSONObject params, HttpSession session) {
        Goods goods = JSONObject.parseObject(params.toString(), Goods.class);
        if (session.getAttribute("UserType") != UserType.Supplier)
            return false;
        goods.setSupplierid((Integer) session.getAttribute("id"));

        return changeGoodsService.addGoods(goods);
    }

    @RequestMapping("/updateGoods")
    public boolean updateGoods(@RequestBody JSONObject params,HttpSession session){
        Goods goods = JSONObject.parseObject(params.toString(), Goods.class);
        if (session.getAttribute("UserType") != UserType.Supplier)
            return false;
        return changeGoodsService.updateGoods(goods, (Integer) session.getAttribute("id"));
    }
}
