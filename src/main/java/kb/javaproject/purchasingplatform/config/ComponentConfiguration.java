package kb.javaproject.purchasingplatform.config;

import kb.javaproject.purchasingplatform.component.ThreadLocalExtension;
import kb.javaproject.purchasingplatform.domain.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ComponentConfiguration {
    @Bean
    public ThreadLocalExtension<BuyerExample> getThreadLocalBuyerExample(){
        return new ThreadLocalExtension<>();
    }
    @Bean
    public ThreadLocalExtension<SupplierExample> getThreadLocalSupplierExample(){
        return new ThreadLocalExtension<>();
    }
    @Bean
    public ThreadLocalExtension<OrderExample> getThreadLocalOrderExample(){
        return new ThreadLocalExtension<>();
    }
    @Bean
    public ThreadLocalExtension<GoodsExample> getThreadLocalGoodsExample(){
        return new ThreadLocalExtension<>();
    }
}
