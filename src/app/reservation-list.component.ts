import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../app/services/Reservation.Service';
import { CommonModule } from '@angular/common';
import { Reservation } from '../app/models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  standalone: false, // Ensure this is true
  template: `
    <div class="reservation-grid">
  <div class="res-card" *ngFor="let res of reservations">
    <div class="res-info">
      <h4>{{ res.guestName }}</h4>
      <p><span>📅</span> {{ res.checkIn }} to {{ res.checkOut }}</p>
    </div>
    <span class="status-badge">Confirmed</span>
  </div>
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