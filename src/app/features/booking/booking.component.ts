import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Booking,
  CollectionMethod,
  DeliveryZone,
  PrasadProduct
} from '../../core/models/models';
import { BookingService } from '../../core/services/booking.service';
import { DemoDataService } from '../../core/services/demo-data.service';

@Component({
  selector: 'app-booking',
  template: `
    <app-page-header
      *ngIf="!embedded"
      eyebrow="Devotee service"
      title="प्रसाद बुकिंग"
      subtitle="कुछ सरल चरणों में माँ दुर्गा का प्रसाद बुक करें।">
    </app-page-header>

    <section class="section-pad">
      <div class="container">

        <button
          *ngIf="embedded && step === 1"
          type="button"
          class="btn btn-light mb-3"
          (click)="backToProducts.emit()">

          <i class="pi pi-arrow-left"></i>
          Prasad options पर वापस जाएँ

        </button>

        <!-- Booking Steps -->
        <div class="booking-steps">
          <span [class.active]="step === 1">1. Details</span>
          <i></i>
          <span [class.active]="step === 2">2. Review</span>
          <i></i>
          <span [class.active]="step === 3">3. Payment</span>
        </div>

        <!-- STEP 1 -->
        <form
          [formGroup]="form"
          *ngIf="step === 1"
          (ngSubmit)="review()"
          class="booking-form">

          <div class="row g-4">

            <!-- LEFT SIDE -->
            <div class="col-lg-7">

              <!-- Prasad & Service -->
              <div class="form-card">
                <h3>प्रसाद और सेवा चुनें</h3>

                <ng-container *ngIf="!embedded; else chosenProduct">

                  <label>Prasad / Bhog</label>

                  <select
                    class="form-select"
                    formControlName="productId">

                  <option
                    *ngFor="let p of products"
                    [ngValue]="p.id">

                    {{ p.name }} — ₹{{ p.price }}

                  </option>
                  </select>

                </ng-container>

                <ng-template #chosenProduct>

                  <div
                    *ngIf="selectedProduct"
                    class="selected-prasad-lock">

                    <span>Selected Prasad</span>

                    <strong>
                      {{ selectedProduct.name }} — ₹{{ selectedProduct.price }}
                    </strong>

                  </div>

                </ng-template>

                <div class="row mt-3 g-3">

                  <div class="col-md-6">
                    <label>Date</label>

                    <input
                      type="date"
                      class="form-control"
                      formControlName="eventDate">
                  </div>

                  <div class="col-md-6">
                    <label>Quantity</label>

                    <input
                      type="number"
                      min="1"
                      max="10"
                      class="form-control"
                      formControlName="quantity">
                  </div>

                </div>

                <!-- Collection Method -->
                <label class="mt-3">
                  Collection Method
                </label>

                <div class="method-select">

                  <label>
                    <input
                      type="radio"
                      formControlName="collectionMethod"
                      value="ON_PREMISES">

                    <i class="pi pi-map-marker"></i>

                    On-Premises
                  </label>

                  <label>
                    <input
                      type="radio"
                      formControlName="collectionMethod"
                      value="HOME_DELIVERY">

                    <i class="pi pi-home"></i>

                    Home Delivery
                  </label>

                </div>

                <!-- Home Delivery -->
                <div
                  *ngIf="isHomeDelivery"
                  class="delivery-fields">

                  <h5>Delivery address</h5>

                  <input
                    class="form-control"
                    placeholder="Address"
                    formControlName="address">

                  <div class="row g-3 mt-0">

                    <div class="col-md-4">

                      <input
                        class="form-control"
                        placeholder="City"
                        formControlName="city">

                    </div>

                    <div class="col-md-4">

                      <select
                        class="form-select"
                        formControlName="ward">

                        <option value="">
                          Select Ward
                        </option>

                        <option
                          *ngFor="let zone of zones"
                          [value]="zone.ward">

                          {{ zone.ward }}

                        </option>

                      </select>

                    </div>

                    <div class="col-md-4">

                      <input
                        class="form-control"
                        placeholder="PIN Code"
                        formControlName="pinCode">

                    </div>

                  </div>

                  <p
                    class="delivery-status"
                    *ngIf="selectedZone">

                    <i
                      [class.pi-check-circle]="selectedZone.isSupported"
                      [class.pi-times-circle]="!selectedZone.isSupported"
                      class="pi">
                    </i>

                    {{
                      selectedZone.isSupported
                        ? 'Home delivery available'
                        : 'Home delivery is currently unavailable in this area.'
                    }}

                  </p>

                </div>

              </div>

              <!-- User Information -->
              <div class="form-card mt-4">

                <h3>आपकी जानकारी</h3>

                <div class="row g-3">

                  <div class="col-md-6">

                    <input
                      class="form-control"
                      placeholder="Name"
                      formControlName="name">

                  </div>

                  <div class="col-md-6">

                    <input
                      class="form-control"
                      placeholder="Mobile Number"
                      formControlName="mobile">

                  </div>

                  <div class="col-12">

                    <input
                      class="form-control"
                      placeholder="Email"
                      formControlName="email">

                  </div>

                </div>

              </div>

            </div>

            <!-- RIGHT SIDE -->
            <div class="col-lg-5">

              <app-order-summary
                [product]="selectedProduct"
                [quantity]="form.value.quantity || 1"
                [method]="form.value.collectionMethod || 'ON_PREMISES'"
                [zone]="selectedZone">
              </app-order-summary>

              <button
                type="submit"
                class="btn btn-maroon btn-lg w-100 mt-3"
                [disabled]="
                  form.invalid ||
                  (isHomeDelivery && !selectedZone?.isSupported)
                ">

                Review Order

                <i class="pi pi-arrow-right"></i>

              </button>

            </div>

          </div>

        </form>

        <!-- STEP 2 : REVIEW -->
        <section
          *ngIf="step === 2 && booking"
          class="review-card">

          <h2>Review your order</h2>

          <app-order-summary
            [product]="selectedProduct"
            [quantity]="booking.item.quantity"
            [method]="booking.collectionMethod"
            [zone]="selectedZone">
          </app-order-summary>

          <div class="d-flex gap-2 mt-4">

            <button
              type="button"
              class="btn btn-light"
              (click)="step = 1">

              Back

            </button>

            <button
              type="button"
              class="btn btn-maroon"
              (click)="pay()">

              Pay ₹{{ booking.totalAmount }}

            </button>

          </div>

        </section>

        <!-- STEP 3 : PAYMENT -->
        <section
          *ngIf="step === 3 && booking"
          class="payment-card text-center">

          <span class="payment-icon">

            <i class="pi pi-credit-card"></i>

          </span>

          <h2>Payment Summary</h2>

          <p>Total Amount</p>

          <div class="payment-total">
            ₹{{ booking.totalAmount }}
          </div>

          <button
            type="button"
            class="btn btn-gold btn-lg"
            (click)="pay()"
            [disabled]="paying">

            {{
              paying
                ? 'Processing…'
                : 'Pay Now'
            }}

          </button>

          <p class="small mt-3">
            Demo payment only · no real charge will be made.
          </p>

        </section>

      </div>
    </section>
  `
})
export class BookingComponent implements OnInit, OnChanges {

  @Input() embedded = false;

  @Input() productId?: number;

  @Output() backToProducts = new EventEmitter<void>();

  step = 1;

  products: PrasadProduct[] = [];

  zones: DeliveryZone[] = [];

  booking?: Booking;

  paying = false;

  form = this.fb.group({

    productId: [
      1,
      Validators.required
    ],

    eventDate: [
      '2026-10-20',
      Validators.required
    ],

    quantity: [
      1,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    collectionMethod: [
      'ON_PREMISES' as CollectionMethod,
      Validators.required
    ],

    name: [
      '',
      [
        Validators.required
      ]
    ],

    mobile: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    address: [
      ''
    ],

    city: [
      'Ranchi'
    ],

    ward: [
      ''
    ],

    pinCode: [
      ''
    ]

  });

  constructor(
    private fb: FormBuilder,
    private data: DemoDataService,
    private bookings: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    // Load Prasad Products
    this.data
      .getPrasadProducts()
      .subscribe(v => {

        this.products = v;

        this.applyProductSelection();

      });

    // Load Delivery Zones
    this.data
      .getDeliveryZones()
      .subscribe(v => {

        this.zones = v;

      });

    // Watch Collection Method
    this.form
      .get('collectionMethod')
      ?.valueChanges
      .subscribe(() => {

        this.updateValidation();

      });

    this.updateValidation();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['productId']) {
      this.applyProductSelection();
    }

  }

  private applyProductSelection(): void {

    const routeProductId = Number(
      this.route.snapshot.queryParamMap.get('product')
    );

    const id = this.productId || routeProductId;

    if (this.products.some(product => product.id === id)) {
      this.form.patchValue({ productId: id });
    }

  }

  // Selected Product
  get selectedProduct(): PrasadProduct | undefined {

    return this.products.find(
      p => p.id === this.form.value.productId
    );

  }

  // Selected Delivery Zone
  get selectedZone(): DeliveryZone | undefined {

    return this.zones.find(
      z => z.ward === this.form.value.ward
    );

  }

  // Check Home Delivery
  get isHomeDelivery(): boolean {

    return this.form.value.collectionMethod === 'HOME_DELIVERY';

  }

  // Update validation based on collection method
  updateValidation(): void {

    const fields = [
      'address',
      'city',
      'ward',
      'pinCode'
    ];

    fields.forEach(f => {

      const control = this.form.get(f);

      if (this.isHomeDelivery) {

        control?.setValidators(
          Validators.required
        );

      } else {

        control?.clearValidators();

      }

      control?.updateValueAndValidity({
        emitEvent: false
      });

    });

  }

  // Review Booking
  review(): void {

    const product = this.selectedProduct;

    if (!product) {
      return;
    }

    const value = this.form.getRawValue();

    this.bookings
      .createBooking({

        name: value.name || '',

        mobile: value.mobile || '',

        email: value.email || '',

        eventDate: value.eventDate || '',

        item: {

          productId: product.id,

          productName: product.name,

          quantity: value.quantity || 1,

          unitPrice: product.price

        },

        collectionMethod:
          value.collectionMethod || 'ON_PREMISES',

        deliveryZone:
          this.selectedZone,

        deliveryAddress:
          this.isHomeDelivery
            ? {

                address: value.address || '',

                city: value.city || '',

                ward: value.ward || '',

                pinCode: value.pinCode || ''

              }
            : undefined

      })
      .subscribe(b => {

        this.booking = b;

        this.step = 2;

      });

  }

  // Payment
  pay(): void {

    if (!this.booking) {

      this.step = 3;

      return;

    }

    if (this.step === 2) {

      this.step = 3;

      return;

    }

    this.paying = true;

    this.bookings
      .simulatePayment(this.booking)
      .subscribe(() => {

        this.router.navigate([
          '/booking/confirmation'
        ]);

      });

  }

}
