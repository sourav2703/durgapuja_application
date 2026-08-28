import { Component, OnInit } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import { Booking } from '../../core/models/models';
import { BookingService } from '../../core/services/booking.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  booking: Booking | null = null;

  safeMapUrl?: SafeResourceUrl;

  /*
   * Google Maps navigation URL
   * Used when user clicks "Google Maps में रास्ता खोलें"
   */
  mapNavigationUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Ranchi+Railway+Station,+Ranchi,+Jharkhand';


  constructor(
    private bookings: BookingService,
    private sanitizer: DomSanitizer
  ) {}


  ngOnInit(): void {

    /*
     * Get current booking
     */
    this.booking = this.bookings.currentBooking();


    /*
     * Google Maps EMBED URL
     *
     * This URL is specifically used inside iframe.
     */
    const mapEmbedUrl =
      'https://www.google.com/maps?q=Ranchi+Railway+Station,+Ranchi,+Jharkhand&output=embed';


    /*
     * Trust the Google Maps resource URL
     * so Angular can display it inside iframe.
     */
    this.safeMapUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(
        mapEmbedUrl
      );
  }

}