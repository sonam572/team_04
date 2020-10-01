import {Injectable} from '@angular/core';

import {Restaurant} from './restaurant/restaurant.model';
import {MenuItem} from './restaurant-detail/menu-item/menu-item.model';
import {Review} from './restaurant-detail/reviews/reviews.model';

@Injectable({
    providedIn:'root'
})
export class RestaurantsService {

    constructor() {

    }

    getAllRestaurants():Restaurant[] {
        return this.restaurants;
    }

    getMenuOfRestaurant(id: string):MenuItem[] {
        return this.menuItems;
    }


    getReviewsOfRestaurants(id: string):Review[] {
        return this.reviews;
    }

    restaurants:Restaurant[] = [
        {
          id: "peru",
          name: "Perú Food ",
          category: "Criolla",
          deliveryEstimate: "25m",
          rating: 1.9,
          imagePath: "assets/images/page3_img1.jpg",
          imagePathHref: "assets/images/big1.jpg",
          about: "A Perú Foog has 20 years of market. Among the specialties we can highlight the ceviche and rice with chicken.",
          hours: "08 AM - 10 PM",
          type: "Dine-out",
          area: "Indiranagar",
          address: "220, 13th Cross, Brookefield, Indiranagar, Bangalore",
          reservation:{ 
            hours: "10:00 AM - 12:00 PM, 01:00 PM - 04:00 PM, 07:00 PM - 10:00 PM",
            maxPeople: 10
           }
        },
        {
          id: "brazilian",
          name: "Brazilian Food",
          category: "Northeastern",
          deliveryEstimate: "100m",
          rating: 4.2,
          imagePath: "assets/images/page3_img2.jpg",
          imagePathHref: "assets/images/big2.jpg",
          about: "A Brazilian Foog has 40 years of market. Among the specialties we can highlight the Bahian foods.",
          hours: "08 AM - 10 PM",
          type: "Cafe",
          area: "Indiranagar",
          address: "220, 13th Cross, Brookefield, Indiranagar, Bangalore",
          reservation:{ 
            hours: "10:00 AM - 12:00 PM, 01:00 PM - 04:00 PM, 07:00 PM - 10:00 PM",
            maxPeople: 10
           }
        },
        {
          id: "argentina",
          name: "Argentina Food",
          category: "Northeastern",
          deliveryEstimate: "100m",
          rating: 2.5,
          imagePath: "assets/images/page3_img3.jpg",
          imagePathHref: "assets/images/big2.jpg",
          about: "A Brazilian Foog has 40 years of market. Among the specialties we can highlight the Bahian foods.",
          hours: "08 AM - 10 PM",
          type: "Cafe",
          area: "Indiranagar",
          address: "220, 13th Cross, Brookefield, Indiranagar, Bangalore",
          reservation:{ 
            hours: "10:00 AM - 12:00 PM, 01:00 PM - 04:00 PM, 07:00 PM - 10:00 PM",
            maxPeople: 10
           }
        },
        {
          id: "colombia",
          name: "Colombia Food",
          category: "Northeastern",
          deliveryEstimate: "100m",
          rating: 5,
          imagePath: "assets/images/page3_img4.jpg",
          imagePathHref: "assets/images/big2.jpg",
          about: "A Brazilian Foog has 40 years of market. Among the specialties we can highlight the Bahian foods.",
          hours: "08 AM - 10 PM",
          type: "Cafe",
          area: "Indiranagar",
          address: "220, 13th Cross, Brookefield, Indiranagar, Bangalore",
          reservation:{ 
            hours: "10:00 AM - 12:00 PM, 01:00 PM - 04:00 PM, 07:00 PM - 10:00 PM",
            maxPeople: 10
           }
        },
        {
          id: "ecuador",
          name: "Ecuador Food",
          category: "Northeastern",
          deliveryEstimate: "100m",
          rating: 3.5,
          imagePath: "assets/images/page3_img5.jpg",
          imagePathHref: "assets/images/big2.jpg",
          about: "A Brazilian Foog has 40 years of market. Among the specialties we can highlight the Bahian foods.",
          hours: "08 AM - 10 PM",
          type: "Dine-out",
          area: "Indiranagar",
          address: "220, 13th Cross, Brookefield, Indiranagar, Bangalore",
          reservation:{ 
            hours: "10:00 AM - 12:00 PM, 01:00 PM - 04:00 PM, 07:00 PM - 10:00 PM",
            maxPeople: 10
           }
        },
        {
          id: "chile",
          name: "Chile Food",
          category: "Northeastern",
          deliveryEstimate: "100m",
          rating: 3.5,
          imagePath: "assets/images/page3_img3.jpg",
          imagePathHref: "assets/images/big2.jpg",
          about: "A Brazilian Foog has 40 years of market. Among the specialties we can highlight the Bahian foods.",
          hours: "08 AM - 10 PM",
          type: "Cafe",
          area: "Indiranagar",
          address: "220, 13th Cross, Brookefield, Indiranagar, Bangalore",
          reservation:{ 
            hours: "10:00 AM - 12:00 PM, 01:00 PM - 04:00 PM, 07:00 PM - 10:00 PM",
            maxPeople: 10
           }
        },
        {
          id: "bolivia",
          name: "Bolivia Food",
          category: "Northeastern",
          deliveryEstimate: "100m",
          rating: 3.5,
          imagePath: "assets/images/page3_img4.jpg",
          imagePathHref: "assets/images/big2.jpg",
          about: "A Brazilian Foog has 40 years of market. Among the specialties we can highlight the Bahian foods.",
          hours: "It runs from Monday to Friday, from 8 am to 10 pm",
          type: "Cafe",
          area: "Indiranagar",
          address: "220, 13th Cross, Brookefield, Indiranagar, Bangalore",
          reservation:{ 
            hours: "10:00 AM - 12:00 PM, 01:00 PM - 04:00 PM, 07:00 PM - 10:00 PM",
            maxPeople: 10
           }
        },
        {
          id: "venezuela",
          name: "Venezuela Food",
          category: "Northeastern",
          deliveryEstimate: "100m",
          rating: 3.5,
          imagePath: "assets/images/page3_img2.jpg",
          imagePathHref: "assets/images/big2.jpg",
          about: "A Brazilian Foog has 40 years of market. Among the specialties we can highlight the Bahian foods.",
          hours: "08 AM - 10 PM",
          type: "Cafe",
          area: "Indiranagar",
          address: "220, 13th Cross, Brookefield, Indiranagar, Bangalore",
          reservation:{ 
            hours: "10:00 AM - 12:00 PM, 01:00 PM - 04:00 PM, 07:00 PM - 10:00 PM",
            maxPeople: 10
           }
        }
      ];
    
    menuItems:MenuItem[]= [
        {
          id: "ceviche",
          imagePath: "assets/images/page3_img1.jpg",
          name: "Ceviche",
          description: "O melhor ceviche do mundo",
          price: 8.7,
          restaurantId: "peru"
        },
        {
          id: "arroz-com-pollo",
          imagePath: "assets/images/page3_img2.jpg",
          name: "Arroz com Pollo",
          description: "O melhor arroz com pollo do mundo",
          price: 8.7,
          restaurantId: "peru"
        },
        {
          id: "causa-rellena",
          imagePath: "assets/images/page3_img1.jpg",
          name: "Causa rellena",
          description: "O melhor causa rellena do mundo",
          price: 8.7,
          restaurantId: "peru"
        },
        {
          id: "arroz_chufa",
          imagePath: "assets/images/page3_img1.jpg",
          name: "Arroz Chaufa",
          description: "O melhor arroz chaufa do mundo",
          price: 8.7,
          restaurantId: "peru"
        }
      ];

    reviews:Review[] = [
        {
          name: "Luis Alberto",
          date: "2018-01-23T18:25:43",
          rating: 5,
          comments: "Everything very good, delivery on time",
          restaurantId: "peru"
        },
        {
          name: "Maria Pepa",
          date: "2018-01-23T18:25:43",
          rating: 3.8,
          comments: "Everything very good, delivery on time",
          restaurantId: "peru"
        },
        {
          name: "Carlos Aberto",
          date: "2018-01-23T18:25:43",
          rating: 2.8,
          comments: "Everything very good, delivery on time",
          restaurantId: "peru"
        },
        {
          name: "Meg",
          date: "2018-12-12T18:25:43",
          rating: 5,
          comments: "Very tasty food, service thousand note",
          restaurantId: "brazilian"
        }
      ]
}
