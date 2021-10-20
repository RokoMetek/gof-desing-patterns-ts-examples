class OrderManagemntService {
    
    
    private static instance: OrderManagemntService;
    private constructor() { }

    /**
     * Singletone desing pattern
     */
    public static getInstance(): OrderManagemntService {
        if(!OrderManagemntService.instance) {
            OrderManagemntService.instance = new OrderManagemntService();
        }
        return OrderManagemntService.instance
    }

    public placeOrder(): void {
        console.log("Place Order method is invoked")
    }

}
