import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Required for Oussema's form

import { App } from '../app/app';
import { ReservationFormComponent } from './reservation-form.component'; // Oussema's component
import { FooterComponent } from './footer.component';
import { ReservationListComponent } from './reservation-list.component'; // Amira's component
import { ReservationService } from './../app/services/Reservation.Service'; // Hamza's service
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    ReservationFormComponent, // Declare here
    ReservationListComponent,  // Declare here
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // Add this for the form to work
    CommonModule, // <--- Add this here
  ],
  providers: [ReservationService], // Provide the service globally
  bootstrap: [App]
})
export class AppModule { }