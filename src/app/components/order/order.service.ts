import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {ShoppingCartService} from '../restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import {OrdersService} from 'd:/foodsapp/food-app-3/src/app/components/orders/orders.service'
import {CartItem} from '../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import {CartItem1} from 'd:/foodsapp/food-app-3/src/app/components/orders/orders.model';
import {Order,Order1} from './order.model';
import {Observable} from 'rxjs/index';
import {RESTAURANT_API} from '../../app.constants';

@Injectable()
export class OrderService {

    constructor(private shoppingCartService: ShoppingCartService,
                private http: HttpClient) {
    }
    
    cartItems(): CartItem[] {
        return this.shoppingCartService.items;
    }

    increaseQtd(item: CartItem) {
        this.shoppingCartService.increaseQtd(item);
    }

    decreaseQtd(item: CartItem) {
        this.shoppingCartService.decreaseQtd(item);
    }

    remove(item: CartItem) {
        this.shoppingCartService.removeItem(item);
    }

    itemsValue() {
        return this.shoppingCartService.total();
    }

    checkOrder(order: Order): Observable<string> {

        const orderObs = new Observable<string>(observer =>{
            observer.next("abc");
        });

        return orderObs;

        // return this.http
        //     .post<Order>(`${RESTAURANT_API}/orders`, order)
        //     .pipe(
        //         map(order => order.id)
        //     );
    }

    clear() {
        this.shoppingCartService.clear();
    }

}
export class OrderService1 {

    constructor(private OrdersService: OrdersService,
                private http: HttpClient) {
    }
    
    cartItems1(): CartItem1[] {
        return this.OrdersService.items;
    }

    increaseQtd1(item: CartItem1) {
        this.OrdersService.increaseQtd1(item);
    }

    decreaseQtd1(item: CartItem1) {
        this.OrdersService.decreaseQtd1(item);
    }

    remove1(item: CartItem1) {
        this.OrdersService.removeItem1(item);
    }

    itemsValue1() {
        return this.OrdersService.total();
    }

    checkOrder1(order: Order1): Observable<string> {

        const orderObs = new Observable<string>(observer =>{
            observer.next("abc");
        });

        return orderObs;

        // return this.http
        //     .post<Order>(`${RESTAURANT_API}/orders`, order)
        //     .pipe(
        //         map(order => order.id)
        //     );
    }

    clear() {
        this.OrdersService.clear();
    }

}
