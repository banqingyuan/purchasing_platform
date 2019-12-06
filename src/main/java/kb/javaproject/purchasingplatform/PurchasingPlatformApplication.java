package kb.javaproject.purchasingplatform;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@MapperScan(basePackages = "kb.javaproject.purchasingplatform")
public class PurchasingPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(PurchasingPlatformApplication.class, args);
    }

}
