import { Component } from '@angular/core';
import { BookingPopup } from '../booking-popup/booking-popup';

@Component({
  selector: 'app-home-step-3',
  imports: [BookingPopup],
  templateUrl: './home-step-3.html',
  styleUrl: './home-step-3.css'
})
export class HomeStep3 {
  isBookingPopupOpen = false;
  selectedService: any = null;

  onCloseBookingPopup() {
    this.isBookingPopupOpen = false;
  }

  onBookAppointment() {
    this.isBookingPopupOpen = true;
  }

}
