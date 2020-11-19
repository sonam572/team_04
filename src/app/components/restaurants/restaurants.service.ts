import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Restaurant} from './restaurant/restaurant.model';
import {MenuItem} from './restaurant-detail/menu-item/menu-item.model';
import {Review} from './restaurant-detail/reviews/reviews.model';
import {RESTAURANT_API} from '../../app.constants';

@Injectable()
export class RestaurantsService {

    restaurants :Restaurant[] = [];
    
    constructor(private http: HttpClient) {
    }

    getAllRestaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`http://219.65.96.170:9087/api/v1/restaurants`);
    }

    getMenuOfRestaurant(id: string): Observable<MenuItem[]> {
        this.getAllRestaurants().pipe(
            map( (data : { [key : string] : Restaurant}) =>{
                const arr : Restaurant[] = [];
                for( const key in data){
                    if(data.hasOwnProperty(key)){
                        arr.push({...data[key],id : key});
                    }
                }
             return arr;

            })
        ).subscribe( res =>{
          console.log(res);
          for( let i in res[2]){
         this.restaurants.push(res[2][i]);     
          }
        });
       
        return this.http.get<MenuItem[]>(`${RESTAURANT_API}/api/v1/menuitems/${id}`);
    }


    getReviewsOfRestaurants(id: string): Observable<Review> {
        return this.http.get<Review>(`${RESTAURANT_API}/restaurants/${id}/reviews`);
    }
    getLocationService():Promise<any>{
        return new Promise((resolve,reject)=>{
            navigator.geolocation.getCurrentPosition(resp=>{
                resolve({long:resp.coords.longitude,lat : resp.coords.latitude})
            })
        })
    }
}
