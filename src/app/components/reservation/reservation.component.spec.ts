/*import { TestBed , async } from '@angular/core/testing';
import { ReservationComponent } from './reservation.component';

describe('Component: Reservation',() =>{
    beforeEach(() =>{
         TestBed.configureTestingModule({
             declarations : [ReservationComponent]
         });
            })
    it('should create the app',()=>{
        let fixture = TestBed.createComponent(ReservationComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});*/
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsService } from '../restaurants/restaurants.service';
import {NotificationService} from '../shared/messages/notification.service';
import { ReservationComponent } from './reservation.component';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationComponent ],
      imports : [ HttpClientTestingModule,RouterTestingModule ],
      providers : [ RestaurantsService,NotificationService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  const TIMEOUT_DELAY = 250;
it('should do something async', (done) => {
  component.getFavorite();
setTimeout(() => {
    expect(component.getFavorite);
        done(); 
      }, TIMEOUT_DELAY);
});
});

