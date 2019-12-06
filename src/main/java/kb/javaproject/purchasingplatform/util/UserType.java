package kb.javaproject.purchasingplatform.util;

public enum UserType {
    Buyer, Supplier;

    @Override
    public String toString() {
        switch (this) {
            case Buyer:
                return "Buyer";
            case Supplier:
                return "Supplier";
            default:
                return "";
        }
    }
}
