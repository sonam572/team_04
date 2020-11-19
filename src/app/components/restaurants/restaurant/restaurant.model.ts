import { Reservation } from "../../reservation/reservation.model";

export interface Restaurant {
      /*  id? : number;
        success : number;
        count: number;
        data: [
          {
            typeOfFood: [],
            _id: string,
            userName: string,
            userEmail: string,
            isRestaurant: boolean,
            userGender: string,
            userAge: number,
            usercity: string,
            userregion: string,
            userCountry: string,
            userProfileImageUrl: string,
            CUSINE_CATEGORY: string,
            CUSINE_TYPE: string,
            TIMING: string,
            createdAt: string,
            updatedAt: string,
            __v: number
          }]
        } */     
    id: string;
    name: string;
    category: string;
    deliveryEstimate: string;
    rating: number;
    imagePath: string;
    imagePathHref: string;
    about: string;
    hours: string;
    type: string;
    area: string;
    address: string;
    reservation: Reservation;
    }
