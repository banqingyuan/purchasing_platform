package kb.javaproject.purchasingplatform.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
@Setter
@Getter
public class Supplier {
    private Integer id;

    private String name;

    private String password;

    private String department;

    private String address;

    private Date lastLogin;

    private String email;
}