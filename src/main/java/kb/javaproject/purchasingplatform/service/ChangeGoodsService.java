package kb.javaproject.purchasingplatform.service;

import kb.javaproject.purchasingplatform.component.ThreadLocalExtension;
import kb.javaproject.purchasingplatform.domain.Goods;
import kb.javaproject.purchasingplatform.domain.GoodsExample;
import kb.javaproject.purchasingplatform.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ChangeGoodsService {
    @Autowired
    private ThreadLocalExtension<GoodsExample> goodsExampleThreadLocal;
    @Autowired
    private GoodsMapper goodsMapper;

    public boolean addGoods(Goods goods){
        int update= goodsMapper.insert(goods);
        return update!=0;
    }


    public boolean updateGoods(Goods newer,Integer supplierId){
        Goods older= goodsMapper.selectByPrimaryKey(newer.getId());
        //禁止修改非本人发布的商品信息
        if (older.getSupplierid()!=supplierId)
            return false;

        //只更新传进的参数
        GoodsExample goodsExample = goodsExampleThreadLocal.get(GoodsExample.class);
        GoodsExample.Criteria criteria = goodsExample.createCriteria();
        criteria.andIdEqualTo(older.getId());
        int update= goodsMapper.updateByExampleSelective(newer, goodsExample);

        return update!=0;
    }
}
