package kb.javaproject.purchasingplatform.domain;

import com.alibaba.fastjson.annotation.JSONField;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Setter
@Getter
public class Order {
    private Integer id;

    private Integer buyerid;

    private Buyer buyer;

    private Integer suplierid;

    private Supplier supplier;

    private String state;

    private BigDecimal amount;
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date begin;
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date end;
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date expect;

    private List<Goods> goodsList;
}