package kb.javaproject.purchasingplatform;


import com.alibaba.fastjson.JSONObject;
import kb.javaproject.purchasingplatform.domain.Goods;
import kb.javaproject.purchasingplatform.domain.InitOrderInfo;
import kb.javaproject.purchasingplatform.util.UserType;
import org.junit.jupiter.api.Test;
import org.springframework.util.DigestUtils;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

public class SimpleTest {
    @Test
    public void run(){
        System.out.println(DigestUtils.md5DigestAsHex("123456".getBytes()));
    }
    @Test
    public void t(){
        //System.out.println(JSONObject.toJSONString());
/*
        UserType a=UserType.Supplier;
        UserType b=UserType.Supplier;
        System.out.println(a==UserType.Supplier);
*/

        InitOrderInfo initOrderInfo=new InitOrderInfo();
        HashMap<Integer,Integer> goodsMap=new HashMap<>();
        for (int i=0;i<5;i++)
        {
            goodsMap.put(i, i * 5);
        }
        initOrderInfo.setGoodsMap(goodsMap);
        //initOrderInfo.setGoodsList(goodsList);
        initOrderInfo.setExpect(new Date());

        String s = JSONObject.toJSONString(initOrderInfo);
        InitOrderInfo orderInfo = JSONObject.parseObject(s, InitOrderInfo.class);
        System.out.println(1);

    }
}