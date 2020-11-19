import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {OrderService} from './order.service';
import {OrderService1} from './order.service';
import {CartItem} from '../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import {CartItem1} from 'd:/foodsapp/food-app-3/src/app/components/orders/orders.model';
import {PATTERS} from '../shared/patterns';
import {RadioOption} from '../shared/radio/radio-option.model';
import {Order, OrderItem} from './order.model';
import {Order1, OrderItem1} from './order.model';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'lacc-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    orderForm: FormGroup;
    delivery: number = 10;
    orderId: string;
    isDeliverySummary:boolean = false;

    paymentOptions: RadioOption[] = [
        {label: 'Money', value: 'MON'},
        {label: 'Credit cart', value: 'CC'},
        {label: 'Debit cart', value: 'CD'},
        {label: 'Other', value: 'NN'}
    ];

    constructor(private orderService: OrderService,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            // name: new FormControl('', {
            //     validators: [Validators.required, Validators.minLength(3)]
            // }),
            address: new FormControl('', [Validators.required, Validators.minLength(5)]),
            number: new FormControl('', [Validators.required, Validators.pattern(PATTERS.number)]),
            landmark: new FormControl('',[Validators.required]),
            zipcode: new FormControl('', [Validators.required, Validators.pattern(PATTERS.number)]),
            addresstag: new FormControl(''),
            // email: new FormControl('', [Validators.required, Validators.pattern(PATTERS.email)]),
            // emailConfirmation: new FormControl('', [Validators.required, Validators.pattern(PATTERS.email)]),
            // optionalAddress: this.formBuilder.control(''),
            paymentOption: new FormControl('card',[Validators.required]),
        }
        // ,{validators: [this.emailEqualsTo], updateOn: 'blur'}
        );
    }

    // private emailEqualsTo(group: AbstractControl): { [key: string]: boolean } {
    //     const email = group.get('email');
    //     const emailConfirmation = group.get('emailConfirmation');

    //     if (!email || !emailConfirmation) {
    //         return undefined;
    //     }

    //     if (email.value !== emailConfirmation.value) {
    //         return {emailsNotMatch: true};
    //     }

    //     return undefined;
    // }

    itemsValue(): number {
        return this.orderService.itemsValue();
    }

    cartItems(): CartItem[] {
        return this.orderService.cartItems();
    }

    decreaseQtd(item: CartItem) {
        return this.orderService.decreaseQtd(item);
    }

    increaseQtd(item: CartItem) {
        return this.orderService.increaseQtd(item);
    }

    remove(item: CartItem) {
        return this.orderService.remove(item);
    }
    checkOrder(order: Order) {
        order.orderItems = this.cartItems()
            .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));

        this.orderService.checkOrder(order)
            .pipe(
                tap((orderId: string) => {
                    this.orderId = orderId;
                    console.log(order);
                })
            )
            .subscribe(() => {
                this.router.navigate(['/order-summary']);
                this.orderService.clear();
            });
    }

    isOrderCompleted(): boolean {
        return this.orderId !== undefined;
    }

    showDeliverySummary(){
        this.isDeliverySummary = !this.isDeliverySummary;
    }

}
export class OrderComponent1 implements OnInit {

    orderForm1: FormGroup;
    delivery1: number = 10;
    orderId1: string;
    isDeliverySummary1:boolean = false;

    paymentOptions: RadioOption[] = [
        {label: 'Money', value: 'MON'},
        {label: 'Credit cart', value: 'CC'},
        {label: 'Debit cart', value: 'CD'},
        {label: 'Other', value: 'NN'}
    ];

    constructor(private orderService1: OrderService1,
                private router1: Router,
                private formBuilder1: FormBuilder) {
    }

    ngOnInit() {
        this.orderForm1 = this.formBuilder1.group({
            // name: new FormControl('', {
            //     validators: [Validators.required, Validators.minLength(3)]
            // }),
            address: new FormControl('', [Validators.required, Validators.minLength(5)]),
            number: new FormControl('', [Validators.required, Validators.pattern(PATTERS.number)]),
            landmark: new FormControl('',[Validators.required]),
            zipcode: new FormControl('', [Validators.required, Validators.pattern(PATTERS.number)]),
            addresstag: new FormControl(''),
            // email: new FormControl('', [Validators.required, Validators.pattern(PATTERS.email)]),
            // emailConfirmation: new FormControl('', [Validators.required, Validators.pattern(PATTERS.email)]),
            // optionalAddress: this.formBuilder.control(''),
            paymentOption: new FormControl('card',[Validators.required]),
        }
        // ,{validators: [this.emailEqualsTo], updateOn: 'blur'}
        );
    }

    // private emailEqualsTo(group: AbstractControl): { [key: string]: boolean } {
    //     const email = group.get('email');
    //     const emailConfirmation = group.get('emailConfirmation');

    //     if (!email || !emailConfirmation) {
    //         return undefined;
    //     }

    //     if (email.value !== emailConfirmation.value) {
    //         return {emailsNotMatch: true};
    //     }

    //     return undefined;
    // }

    itemsValue1(): number {
        return this.orderService1.itemsValue1();
    }

    cartItems1(): CartItem1[] {
        return this.orderService1.cartItems1();
    }

    decreaseQtd1(item: CartItem1) {
        return this.orderService1.decreaseQtd1(item);
    }

    increaseQtd1(item: CartItem1) {
        return this.orderService1.increaseQtd1(item);
    }

    remove1(item: CartItem1) {
        return this.orderService1.remove1(item);
    }
    checkOrder1(order: Order1) {
        
        this.orderService1.checkOrder1(order)
            .pipe(
                tap((orderId: string) => {
                    this.orderId1 = orderId;
                    console.log(order);
                })
            )
            .subscribe(() => {
                this.router1.navigate(['/order-summary']);
                this.orderService1.clear();
            });
    }

    isOrderCompleted1(): boolean {
        return this.orderId1 !== undefined;
    }

    showDeliverySummary1(){
        this.isDeliverySummary1 = !this.isDeliverySummary1;
    }

}
