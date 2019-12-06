package kb.javaproject.purchasingplatform.service;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageHelper;
import kb.javaproject.purchasingplatform.component.ThreadLocalExtension;
import kb.javaproject.purchasingplatform.domain.Goods;
import kb.javaproject.purchasingplatform.domain.GoodsExample;
import kb.javaproject.purchasingplatform.mapper.GoodsMapper;
import kb.javaproject.purchasingplatform.util.GlobalConstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class SearchGoodsService {
    @Autowired
    GoodsMapper goodsMapper;
    @Autowired
    ThreadLocalExtension<GoodsExample>goodsExampleThreadLocal;


    public String searchGoods(String goodsName,Integer page){
        GoodsExample goodsExample = goodsExampleThreadLocal.get(GoodsExample.class);
        GoodsExample.Criteria criteria = goodsExample.createCriteria();
        if (goodsName!=null){
            criteria.andNameLike(goodsName);
        }
        page=page==null?0:page-1;
        PageHelper.startPage(page, GlobalConstant.GoodsPageSize);
        List<Goods> list= goodsMapper.selectByExample(goodsExample);

        return JSONObject.toJSONString(list);
    }


    public String searchGoodsById(Integer id){
        Goods goods = goodsMapper.selectByPrimaryKey(id);
        return goods!=null?JSONObject.toJSONString(goods):null;
    }

}
