class OrderItem {
    constructor(public quantity: number, public menuId: string) {
    }
    }

class Order {
    constructor(public address: string,
                public number: number,
                public optionalAddress: string,
                public paymentOptions: string,
                public orderItems: OrderItem[] = [],
                public id?: string) {
    }
}

export {Order, OrderItem};
class OrderItem1 {
    constructor(public quantity: number, public menuId: string) {
    }
    }

class Order1 {
    constructor(public address: string,
                public number: number,
                public optionalAddress: string,
                public paymentOptions: string,
                public orderItems: OrderItem[] = [],
                public id?: string) {
    }
}

export {Order1, OrderItem1};
