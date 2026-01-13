import { Component, signal } from '@angular/core';
import { ReservationFormComponent } from './reservation-form.component'; // Import Oussema's component
import { ReservationListComponent } from './reservation-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('khaliha-ala-allah');
}
