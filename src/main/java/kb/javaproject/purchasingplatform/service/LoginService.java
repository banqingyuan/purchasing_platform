package kb.javaproject.purchasingplatform.service;

import kb.javaproject.purchasingplatform.component.ThreadLocalExtension;
import kb.javaproject.purchasingplatform.domain.Buyer;
import kb.javaproject.purchasingplatform.domain.BuyerExample;
import kb.javaproject.purchasingplatform.domain.Supplier;
import kb.javaproject.purchasingplatform.domain.SupplierExample;
import kb.javaproject.purchasingplatform.mapper.BuyerMapper;
import kb.javaproject.purchasingplatform.mapper.SupplierMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.DigestUtils;

import java.util.Date;
import java.util.List;

@Transactional
@Service
public class LoginService {
    @Autowired
    BuyerMapper buyerMapper;
    @Autowired
    ThreadLocalExtension<BuyerExample> buyerExampleThreadLocal;

    public boolean buyLogin(Buyer buyerLogin) {
        BuyerExample buyerExample = buyerExampleThreadLocal.get(BuyerExample.class);
        BuyerExample.Criteria criteria = buyerExample.createCriteria();
        criteria.andEmailEqualTo(buyerLogin.getEmail());
        List<Buyer> buyers = buyerMapper.selectByExample(buyerExample);
        boolean login;
        if (buyers.size() != 1)
            login = false;

        else {
            Buyer buyer = buyers.get(0);
            login = buyer.getPassword().
                    equals(DigestUtils.md5DigestAsHex(buyerLogin.getPassword().getBytes()));
            buyerLogin.setId(buyer.getId());
            if (login) {
                buyer.setLastLogin(new Date());
                buyerMapper.updateByExampleSelective(buyer, buyerExample);
            }
        }
        buyerExample.clear();
        return login;
    }

    @Autowired
    SupplierMapper supplierMapper;
    @Autowired
    ThreadLocalExtension<SupplierExample> supplierExampleThreadLocalExtension;

    public boolean supplierLogin(Supplier supplierLogin) {
        SupplierExample supplierExample = supplierExampleThreadLocalExtension.get(SupplierExample.class);
        SupplierExample.Criteria criteria = supplierExample.createCriteria();
        criteria.andEmailEqualTo(supplierLogin.getEmail());
        List<Supplier> suppliers = supplierMapper.selectByExample(supplierExample);
        boolean login;
        if (suppliers.size() != 1)
            login = false;
        else {
            Supplier supplier = suppliers.get(0);
            login = supplier.getPassword().
                    equals(DigestUtils.md5DigestAsHex(supplierLogin.getPassword().getBytes()));
            supplierLogin.setId(supplier.getId());
            if (login) {
                supplier.setLastLogin(new Date());
                supplierMapper.updateByExampleSelective(supplier, supplierExample);
            }

        }
        supplierExample.clear();
        return login;
    }
}
