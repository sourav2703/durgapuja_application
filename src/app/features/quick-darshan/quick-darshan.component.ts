import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking, QuickDarshanConfig } from '../../core/models/models';
import { AccessVerificationService } from '../../core/services/access-verification.service';
import { BookingService } from '../../core/services/booking.service';
import { DemoDataService } from '../../core/services/demo-data.service';

@Component({ selector: 'app-quick-darshan', templateUrl: './quick-darshan.component.html', styleUrls: ['./quick-darshan.component.css'] })
export class QuickDarshanComponent implements OnInit {
  config?: QuickDarshanConfig;
  booking?: Booking;
  step = 1;
  paying = false;
  form = this.fb.group({ name: ['', Validators.required], mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], email: ['', [Validators.required, Validators.email]], timeSlot: ['', Validators.required] });

  constructor(private fb: FormBuilder, private data: DemoDataService, private bookings: BookingService, private access: AccessVerificationService, private router: Router) {}

  ngOnInit(): void {
    const verified = this.access.getVerification('QUICK_DARSHAN');
    if (verified) {
      const contact = verified.contact;
      this.form.patchValue(contact.includes('@') ? { email: contact } : { mobile: contact });
    }
    this.data.getQuickDarshanConfig().subscribe(config => {
      this.config = config;
      this.form.patchValue({ timeSlot: config.timeSlots[0] });
    });
  }

  review(): void {
    if (this.form.invalid || !this.config) { this.form.markAllAsTouched(); return; }
    const value = this.form.getRawValue();
    this.bookings.createQuickDarshanBooking(value.name || '', value.mobile || '', value.email || '', this.config, value.timeSlot || '').subscribe(booking => { this.booking = booking; this.step = 2; });
  }

  pay(): void {
    if (!this.booking) { return; }
    if (this.step === 2) { this.step = 3; return; }
    this.paying = true;
    this.bookings.simulatePayment(this.booking).subscribe(() => this.router.navigate(['/booking/confirmation']));
  }
}
