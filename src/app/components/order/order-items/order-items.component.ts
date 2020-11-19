import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from '../../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import {CartItem1} from 'd:/foodsapp/food-app-3/src/app/components/orders/orders.model'

@Component({
    selector: 'lacc-order-items',
    templateUrl: './order-items.component.html',
    styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

    @Input() items: CartItem[];
    @Output() increaseQtd = new EventEmitter<CartItem>();
    @Output() decreaseQtd = new EventEmitter<CartItem>();
    @Output() remove = new EventEmitter<CartItem>();
    
    constructor() {
    }

    ngOnInit() {
    }

    emitIncreaseQtd(item: CartItem) {
        this.increaseQtd.emit(item);
    }

    emitDecreaseQtd(item: CartItem) {
        this.decreaseQtd.emit(item);
    }

    emitRemove(item: CartItem) {
        this.remove.emit(item);
    }

}
export class OrderItemsComponent1 implements OnInit {
    @Input() items1: CartItem1[];
    @Output() increaseQtd1 = new EventEmitter<CartItem1>();
    @Output() decreaseQtd1 = new EventEmitter<CartItem1>();
    @Output() remove1 = new EventEmitter<CartItem1>();
    constructor() {
    }

    ngOnInit() {
    }
    emitIncreaseQtd1( item:CartItem1) {
        this.increaseQtd1.emit(item);
    }
    emitDecreaseQtd1(item:CartItem1) {
        this.decreaseQtd1.emit(item);
    }

    emitRemove1(item:CartItem1) {
        this.remove1.emit(item);
    }

}