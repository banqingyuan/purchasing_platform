package kb.javaproject.purchasingplatform.mapper;

import java.util.List;

import kb.javaproject.purchasingplatform.domain.Goods;
import kb.javaproject.purchasingplatform.domain.Order;
import kb.javaproject.purchasingplatform.domain.OrderExample;
import kb.javaproject.purchasingplatform.domain.OrderGoods;
import org.apache.ibatis.annotations.Param;

public interface OrderMapper {
    long countByExample(OrderExample example);

    int deleteByExample(OrderExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Order record);

    int insertSelective(Order record);

    List<Order> selectByExample(OrderExample example);

    Order selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Order record, @Param("example") OrderExample example);

    int updateByExample(@Param("record") Order record, @Param("example") OrderExample example);

    int updateByPrimaryKeySelective(Order record);

    int updateByPrimaryKey(Order record);

    List<Goods> selectGoodsOfOrder(Integer oderId);

    int insertOrderGoods(List<OrderGoods> list);

    int updateOrdersAmount(List<Order> list);

    int insertOrders(List<Order> orders);
}