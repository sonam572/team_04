import {Component, OnInit} from '@angular/core';
import {switchMap, tap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Restaurant} from './restaurant/restaurant.model';
import {RestaurantsService} from './restaurants.service';
import { standardizeConfig } from '@angular/router/src/config';

@Component({
    selector: 'lacc-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

    restaurants :Restaurant[] = [];
    
    constructor(private restaurantService: RestaurantsService) {
    }

    ngOnInit() {
        // this.restaurantService.getAllRestaurants()
        //     .pipe(
        //         //tap(restaurants => console.log('R: ', restaurants))
        //     )
        //     .subscribe(restaurants => this.restaurants = restaurants);

     /*  this.restaurantService.getAllRestaurants().pipe(
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
        });*/
        
        this.getlocation();
        
    }

    getlocation(){
        this.restaurantService.getLocationService().then(resp=>{
            console.log(resp.long);
            console.log(resp.lat);
                var lat = resp.lat; 
                var lng = resp.long; 
               this.getCity(lat,lng);
            
        })
        

    }
       getCity(lat,lng){
        var xhr = new XMLHttpRequest(); 
       
        xhr.open('GET', "http://maps.googleapis.com/maps/api/js&lat=" + 
        lat + "&lon=" + lng + "&format=json", true); 
        xhr.send(); 
        xhr.onreadystatechange = processRequest; 
        xhr.addEventListener("readystatechange", processRequest, false); 
      
        function processRequest(e) { 
            if (xhr.readyState == 4 && xhr.status == 200) { 
                var response = JSON.parse(xhr.responseText); 
                var city = response.address.city; 
                console.log(city); 
                return; 
            } 
        }
        
    } 
      
    getVal(item){
        this.restaurants=[];
     this.restaurantService.getAllRestaurants().pipe(
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
       for( let i in res[2]){
          if(item.value.toLowerCase()===res[2][i].usercity.toLowerCase()){
     this.restaurants.push(res[2][i]); 
        }
    }
    });
    
    }
   }
