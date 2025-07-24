import { Component } from '@angular/core';
import { ServiceCard } from '../service-card/service-card';
import { BookingPopup } from '../booking-popup/booking-popup';
import { CommonModule } from '@angular/common';
import { Service } from '../models/booking.interface';
import { SERVICES_DATA } from '../services-data';

@Component({
  selector: 'app-service-page',
  imports: [CommonModule, ServiceCard, BookingPopup ],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css'
})
export class ServicePage {

  title = 'wellness-booking';
  services = SERVICES_DATA;
  isBookingPopupOpen = false;
  selectedService: Service | null = null;

  onBookAppointment(service: Service) {
    this.selectedService = service;
    this.isBookingPopupOpen = true;
  }

  onCloseBookingPopup() {
    this.isBookingPopupOpen = false;
    this.selectedService = null;
  }
}
