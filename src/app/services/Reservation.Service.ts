import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private reservations: Reservation[] = [];
  // BehaviorSubject allows the list to update automatically when a new reservation is added
  private reservationsSub = new BehaviorSubject<Reservation[]>([]);

  getReservations() {
    return this.reservationsSub.asObservable();
  }

  addReservation(reservation: Reservation) {
    this.reservations.push(reservation);
    this.reservationsSub.next([...this.reservations]);
  }
}