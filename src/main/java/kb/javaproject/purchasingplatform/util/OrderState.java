package kb.javaproject.purchasingplatform.util;

public enum OrderState {
    completed, outstanding, delivering;
//    completed（已完成）,outstanding（未完成）,delivering（配送中）

    @Override
    public String toString() {
        switch (this) {
            case completed:
                return "completed";
            case delivering:
                return "delivering";
            case outstanding:
                return "outstanding";
            default:
                return null;
        }
    }
}
