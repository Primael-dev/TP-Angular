import { Component } from '@angular/core';
import { ServiceCard } from '../service-card/service-card';
import { BookingPopup } from '../booking-popup/booking-popup';
import { CommonModule } from '@angular/common';
import { SERVICES_DATA } from '../services-data';

@Component({
  selector: 'app-about-page',
  imports: [  BookingPopup ],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage {
  isBookingPopupOpen = false;
  selectedService: any = null;

  onCloseBookingPopup() {
    this.isBookingPopupOpen = false;
  }

  onBookAppointment() {
    this.isBookingPopupOpen = true;
  }
}
