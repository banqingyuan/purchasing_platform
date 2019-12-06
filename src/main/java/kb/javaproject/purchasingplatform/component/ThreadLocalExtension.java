package kb.javaproject.purchasingplatform.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

public class ThreadLocalExtension<T> extends ThreadLocal<T>{
    @Autowired
    ApplicationContext applicationContext;
    public ThreadLocalExtension(){
        super();
    }
    public T get(Class<T> example){
        T bean=super.get();
        if(bean==null){
            super.set((T) applicationContext.getBean(example));
        }
        return super.get();
    }
}
