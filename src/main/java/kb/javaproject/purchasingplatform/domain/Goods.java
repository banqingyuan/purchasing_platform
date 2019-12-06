package kb.javaproject.purchasingplatform.domain;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
@Setter
@Getter
public class Goods {
    private Integer id;

    private Integer supplierid;

    private String name;

    private BigDecimal price;

    private Integer inventory;

    private String picture;

    private String simpledescribe;
}