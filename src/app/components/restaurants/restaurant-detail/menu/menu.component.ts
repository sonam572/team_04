import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap, tap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {MenuItem} from '../menu-item/menu-item.model';
//import {RestaurantsService} from '../../restaurants.service';
import {RestaurantsService} from '../../restaurants.service';

@Component({
    selector: 'lacc-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

    // menu: Observable<MenuItem[]>;
    menu: MenuItem[]=[];

    constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) {
    }

    ngOnInit() {
       this.restaurantService.getMenuOfRestaurant(this.route.parent.snapshot.params["id"]).pipe(
         map((data: {[key : string]:MenuItem})=>{
             const arr : MenuItem[] =[];
             for( const key in data ){
                 if(data.hasOwnProperty(key)){
                     arr.push({...data[key],id:key});
                 }
             }
             return arr;
         })
     ).subscribe(res =>{
         for( let i in res[1]){
            this.menu.push(res[1][i]);    
             }
     });
    }
    

}
