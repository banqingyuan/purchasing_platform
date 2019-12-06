package kb.javaproject.purchasingplatform.component;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginHandlerInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Boolean result =(Boolean)request.getSession().getAttribute("login");
        result= result==null?false:result;
        if (!result)
            response.sendRedirect("/login.html");
        return result;
    }
}
