package kb.javaproject.purchasingplatform.service;

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

@Transactional
@Service
public class RegisterService {
    @Autowired
    BuyerMapper buyerMapper;
    @Autowired
    BuyerExample buyerExample;

    public boolean buyerRegister(Buyer buyer){
        BuyerExample.Criteria criteria = buyerExample.createCriteria();
        criteria.andEmailEqualTo(buyer.getEmail());
        if(buyerMapper.selectByExample(buyerExample).size()!=0)
            return false;
        String str = DigestUtils.md5DigestAsHex(buyer.getPassword().getBytes());
        buyer.setPassword(str);
        buyerMapper.insert(buyer);
        return true;
    }

    @Autowired
    SupplierMapper supplierMapper;
    @Autowired
    SupplierExample supplierExample;

    public boolean supplierRegister(Supplier supplier){
        SupplierExample.Criteria criteria = supplierExample.createCriteria();
        criteria.andEmailEqualTo(supplier.getEmail());
        if(supplierMapper.selectByExample(supplierExample).size()!=0)
            return false;
        String str = DigestUtils.md5DigestAsHex(supplier.getPassword().getBytes());
        supplier.setPassword(str);

        supplierMapper.insert(supplier);
        return true;

    }
}

