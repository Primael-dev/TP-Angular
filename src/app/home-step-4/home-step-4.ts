import { Component } from '@angular/core';
import { BookingPopup } from '../booking-popup/booking-popup';

@Component({
  selector: 'app-home-step-4',
  imports: [BookingPopup],
  templateUrl: './home-step-4.html',
  styleUrl: './home-step-4.css'
})
export class HomeStep4 {
  isBookingPopupOpen = false;
  selectedService: any = null;

  onCloseBookingPopup() {
    this.isBookingPopupOpen = false;
  }

  onBookAppointment() {
    this.isBookingPopupOpen = true;
  }

}
