import { Component } from '@angular/core';
import { BookingPopup } from '../booking-popup/booking-popup';

@Component({
  selector: 'app-home-step-1',
  imports: [BookingPopup],
  templateUrl: './home-step-1.html',
  styleUrl: './home-step-1.css'
})
export class HomeStep1 {
  isBookingPopupOpen = false;
  selectedService: any = null;

  onCloseBookingPopup() {
    this.isBookingPopupOpen = false;
  }

  onBookAppointment() {
    this.isBookingPopupOpen = true;
  }
}
