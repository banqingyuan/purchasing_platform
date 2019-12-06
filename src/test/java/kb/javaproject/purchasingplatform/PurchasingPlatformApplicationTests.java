package kb.javaproject.purchasingplatform;

import kb.javaproject.purchasingplatform.component.TestComponent;
import kb.javaproject.purchasingplatform.domain.*;
import kb.javaproject.purchasingplatform.mapper.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.util.List;

@SpringBootTest
class PurchasingPlatformApplicationTests {
    @Test
    void contextLoads() {
    }
    @Autowired
    StudentMapper studentMapper;
    @Autowired
    private DataSource dataSource;
    @Test
    public void jdbcTest(){
        if (dataSource==null)
            try {
                throw new Exception();
            } catch (Exception e) {
                e.printStackTrace();
            }
        if (studentMapper==null)
            try {
                throw new Exception();
            } catch (Exception e) {
                e.printStackTrace();
            }

    }
    @Autowired
    BuyerMapper buyerMapper;
    @Autowired
    GoodsMapper goodsMapper;
    @Autowired
    OrderMapper orderMapper;
    @Autowired
    SupplierMapper supplierMapper;

    @Test
    public void testMapper(){
        Buyer buyer = buyerMapper.selectByPrimaryKey(1);
        Goods goods = goodsMapper.selectByPrimaryKey(1);
        Order order= orderMapper.selectByPrimaryKey(1);
        Supplier supplier= supplierMapper.selectByPrimaryKey(1);
        System.out.println("testMapper");
    }
    @Autowired
    BuyerExample buyerExample0;

    @Autowired
    BuyerExample buyerExample;
    @Test
    public void testPrototype(){
        System.out.println(buyerExample==buyerExample0);
    }

    @Autowired
    private TestComponent testComponent;
    @Test
    public void componentTest(){
        if (testComponent.getAge()==null)
            try {
                throw new Exception("bean属性没有注入成功");
            } catch (Exception e) {
                e.printStackTrace();
            }
    }
    @Test
    public void orderMapperTest(){
        List list = orderMapper.selectGoodsOfOrder(1);
        System.out.println(1);
    }
    /*@Autowired
    ThreadLocal<BuyerExample> threadLocalBuyExample;
    @Autowired
    ThreadLocal<SupplierExample> threadLocalSupplierExample;*/
    @Test
    public void testThreadLocal(){
        System.out.println(1);
    }
}
