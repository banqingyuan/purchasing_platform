package kb.javaproject.purchasingplatform.component;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Data
@PropertySource(value = {"classpath:config/test.yml"},factory = MixPropertySourceFactory.class)
@Component
@ConfigurationProperties(prefix = "component")
public class TestComponent {
    private String name;
    private Integer age;
}
