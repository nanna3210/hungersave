import {
  Component,
  ChangeDetectionStrategy,
  input,
  Input,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Restaurant } from '../model/Restaurant';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantComponent implements OnInit {
  @Input()
  restaurant?: Restaurant;
  isHovered: boolean = false;
  ngOnInit(): void {
    // console.log('Hey ' + this.restaurant);
    console.log(this.restaurant);
  }

  // 'https://images.unsplash.com/photo-1629283151312-adcc22231788?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
}
