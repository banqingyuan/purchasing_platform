package kb.javaproject.purchasingplatform.domain;

import com.alibaba.fastjson.annotation.JSONField;
import lombok.Data;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class InitOrderInfo {
    HashMap<Integer,Integer> goodsMap;
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    Date expect;
}
