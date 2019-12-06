package kb.javaproject.purchasingplatform.domain;

import lombok.Data;

import java.math.BigDecimal;


@Data
public class OrderGoods {
    private Integer id;
    private Integer orderid;
    private Integer goodsid;
    private Integer weight;
    private BigDecimal amount;
}
