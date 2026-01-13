import { Component } from '@angular/core';
import { ReservationService } from '../app/services/Reservation.Service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-form',
  standalone: false, // Ensure this is true
  template: `
    <div class="form-container">
      <h3>Book a Room</h3>
      <input #name type="text" placeholder="Guest Name">
      <input #checkIn type="date">
      <input #checkOut type="date">
      <button (click)="submit(name.value, checkIn.value, checkOut.value)">Confirm Booking</button>
    </div>
  `
})
export class ReservationFormComponent {
  constructor(private resService: ReservationService) {}

  submit(name: string, start: string, end: string) {
    const newRes = { id: Date.now(), guestName: name, checkIn: start, checkOut: end, roomType: 'Standard' };
    this.resService.addReservation(newRes);
  }
}