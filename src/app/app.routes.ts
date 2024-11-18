import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'restaurants', component: RestaurantListComponent },
];
