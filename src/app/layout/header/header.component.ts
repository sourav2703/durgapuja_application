import { Component } from '@angular/core';
import { Params } from '@angular/router';

interface NavigationItem {
  label: string;
  path: string;
  queryParams?: Params;
}

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],

  template: `
    <nav class="main-nav">

      <div class="container nav-container">

        <!-- =================================================
             BRAND
        ================================================== -->

        <a
          routerLink="/"
          class="brand"
          (click)="closeMenus()">

          <span class="brand-icon">
            ॐ
          </span>

          <span class="brand-text">

            <strong>
              Ranchi Railway Station
            </strong>

            <small>
              Durga Puja 2026
            </small>

          </span>

        </a>


        <!-- =================================================
             MOBILE MENU BUTTON
        ================================================== -->

        <button
          type="button"
          class="mobile-toggle"
          (click)="open = !open"
          [attr.aria-expanded]="open">

          <i
            class="pi"
            [ngClass]="open ? 'pi-times' : 'pi-bars'">
          </i>

        </button>


        <!-- =================================================
             NAVIGATION
        ================================================== -->

        <div
          class="nav-menu"
          [class.open]="open">


          <!-- =================================================
               NORMAL LINKS
          ================================================== -->

          <a
            *ngFor="let item of links"
            [routerLink]="item.path"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{
              exact: item.path === '/'
            }"
            class="nav-link"
            (click)="closeMenus()">

            {{ item.label }}

          </a>


          <!-- =================================================
               BOOKING DROPDOWN
          ================================================== -->

          <div
            class="booking-menu"
            [class.open]="bookingOpen">


            <!-- BOOKING BUTTON -->

            <button
              type="button"
              class="booking-btn"
              (click)="toggleBooking($event)">

              <i class="pi pi-calendar-plus"></i>

              Booking

              <i
                class="pi dropdown-arrow"
                [ngClass]="
                  bookingOpen
                    ? 'pi-chevron-up'
                    : 'pi-chevron-down'
                ">
              </i>

            </button>


            <!-- =================================================
                 BOOKING DROPDOWN
            ================================================== -->

            <div
              class="booking-dropdown"
              *ngIf="bookingOpen">


              <!-- PRASAD -->

              <a
                routerLink="/access"
                [queryParams]="{
                  experience: 'BHOG'
                }"
                class="booking-option"
                (click)="closeMenus()">

                <span class="option-icon prasad-icon">

                  <i class="pi pi-shopping-bag"></i>

                </span>

                <span class="option-content">

                  <strong>
                    Prasad Booking
                  </strong>

                  <small>
                    प्रसाद एवं भोग बुक करें
                  </small>

                </span>

                <i class="pi pi-arrow-right option-arrow"></i>

              </a>


              <!-- QUICK DARSHAN -->

              <a
                routerLink="/access"
                [queryParams]="{
                  experience: 'QUICK_DARSHAN'
                }"
                class="booking-option"
                (click)="closeMenus()">

                <span class="option-icon darshan-icon">

                  <i class="pi pi-eye"></i>

                </span>

                <span class="option-content">

                  <strong>
                    शीघ्र दर्शन Booking
                  </strong>

                  <small>
                    Special Entry Pass बुक करें
                  </small>

                </span>

                <i class="pi pi-arrow-right option-arrow"></i>

              </a>


            </div>

          </div>

        </div>

      </div>

    </nav>
  `
})
export class HeaderComponent {

  open = false;

  bookingOpen = false;


  links: NavigationItem[] = [

    {
      label: 'Home',
      path: '/'
    },

    {
      label: 'Puja Schedule',
      path: '/puja-schedule'
    },

    {
      label: 'Live Darshan',
      path: '/live-darshan'
    },

    {
      label: 'Gallery',
      path: '/gallery'
    },

    {
      label: 'Videos',
      path: '/videos'
    },

    {
      label: 'About',
      path: '/about'
    },

    {
      label: 'Contact',
      path: '/contact'
    }

  ];


  toggleBooking(event: Event): void {

    event.stopPropagation();

    this.bookingOpen = !this.bookingOpen;

  }


  closeMenus(): void {

    this.open = false;

    this.bookingOpen = false;

  }

}
