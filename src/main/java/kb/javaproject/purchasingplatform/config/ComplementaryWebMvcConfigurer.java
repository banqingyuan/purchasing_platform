package kb.javaproject.purchasingplatform.config;

import kb.javaproject.purchasingplatform.component.LoginHandlerInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ComplementaryWebMvcConfigurer implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        /*registry.addInterceptor(new LoginHandlerInterceptor()).excludePathPatterns("/test/**").
                addPathPatterns("/**");*/
    }


}
