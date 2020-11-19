import { OrderItem } from "../order/order.model";


export interface Orders{
    name: string;
    address: string;
    number: string;
    email: string;
    emailConfirmation: string;
    optionalAddress: string;
    paymentOptions: string;
    orderItems: OrderItem[];
    id: number;

}
export class CartItem1{
    constructor(public menuItem: Orders, public quantity: number = 1) {

    }

    value(): number {
        return 126;
    }}
