package kb.javaproject.purchasingplatform.controller;

import kb.javaproject.purchasingplatform.service.SearchGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchGoodsController {
    @Autowired
    private SearchGoodsService searchGoodsService;
    @RequestMapping("/searchGoods")
    public String searchGoods(String goodsName,Integer page){
         String string= searchGoodsService.searchGoods(goodsName, page);

        return string;
    }

    @RequestMapping("/searchGoodsById")
    public String searchGoodsById(@RequestParam("id") Integer id){
        return searchGoodsService.searchGoodsById(id);
    }
}
