import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../app/services/Reservation.Service';
import { Reservation } from '../app/models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  template: `
    <div class="list-container">
      <h3>Current Reservations</h3>
      <table>
        <tr><th>Guest</th><th>Check-in</th><th>Check-out</th></tr>
        <tr *ngFor="let res of reservations">
          <td>{{ res.guestName }}</td>
          <td>{{ res.checkIn }}</td>
          <td>{{ res.checkOut }}</td>
        </tr>
      </table>
    </div>
  `
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private resService: ReservationService) {}

  ngOnInit() {
    this.resService.getReservations().subscribe(data => {
      this.reservations = data;
    });
  }
}