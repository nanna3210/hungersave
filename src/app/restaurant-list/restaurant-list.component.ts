import { Component } from '@angular/core';
import { RESTAURANTS } from '../../db/restaurants';
import { RestaurantComponent } from '../restaurant/restaurant.component';
import { Restaurant } from '../model/Restaurant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RestaurantComponent, CommonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss',
})
export class RestaurantListComponent {
  restaurants?: Restaurant[] = RESTAURANTS;
  constructor() {
    // console.log(this.restaurants);
  }
  url: string =
    'https://images.unsplash.com/photo-1629283151312-adcc22231788?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
}
