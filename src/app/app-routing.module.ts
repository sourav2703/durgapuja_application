import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { ScheduleComponent } from './features/schedule/schedule.component';
import { LiveDarshanComponent } from './features/live-darshan/live-darshan.component';

import { PrasadComponent } from './features/prasad/prasad.component';
import { BookingComponent } from './features/booking/booking.component';
import { BookingRedirectComponent } from './features/booking/booking-redirect.component';
import { ConfirmationComponent } from './features/booking/confirmation.component';
import { InfoComponent } from './features/info/info.component';
import { AdminLoginComponent } from './features/admin/admin-login.component';
import { AdminComponent } from './features/admin/admin.component';
import { GalleryComponent } from './features/media/gallery/gallery.component';
import { VideosComponent } from './features/media/videos/videos.component';
import { AccessComponent } from './features/access/access.component';
import { QuickDarshanComponent } from './features/quick-darshan/quick-darshan.component';
import { VerifiedExperienceGuard } from './core/guards/verified-experience.guard';



const routes: Routes = [

  /* =====================================================
     PUBLIC WEBSITE
  ===================================================== */

  {
    path: '',
    component: HomeComponent,
    title: 'Ranchi Railway Durga Puja 2026'
  },

  {
    path: 'puja-schedule',
    component: ScheduleComponent,
    title: 'Puja Schedule | RRDP'
  },

  {
    path: 'live-darshan',
    component: LiveDarshanComponent,
    title: 'Live Darshan | RRDP'
  },

  {
    path: 'prasad',
    component: PrasadComponent,
    canActivate: [VerifiedExperienceGuard],
    data: { experience: 'BHOG' },
    title: 'Prasad & Bhog | RRDP'
  },

  {
    path: 'access',
    component: AccessComponent,
    title: 'Verify Access | RRDP'
  },

  {
    path: 'quick-darshan',
    component: QuickDarshanComponent,
    canActivate: [VerifiedExperienceGuard],
    data: { experience: 'QUICK_DARSHAN' },
    title: 'शीघ्र दर्शन | RRDP'
  },

  {
    path: 'booking',
    component: BookingRedirectComponent,
    title: 'Book Prasad | RRDP'
  },

  {
    path: 'booking/confirmation',
    component: ConfirmationComponent,
    title: 'Booking Confirmed | RRDP'
  },


  /* =====================================================
     MEDIA
  ===================================================== */

  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Gallery | RRDP'
  },

  {
    path: 'videos',
    component: VideosComponent,
    title: 'Videos | RRDP'
  },
  


  /* =====================================================
     INFORMATION
  ===================================================== */

  {
    path: 'about',
    component: InfoComponent,
    data: {
      page: 'about'
    },
    title: 'About | RRDP'
  },

  {
    path: 'contact',
    component: InfoComponent,
    data: {
      page: 'contact'
    },
    title: 'Contact | RRDP'
  },


  /* =====================================================
     ADMIN
  ===================================================== */

  {
    path: 'admin/login',
    component: AdminLoginComponent,
    title: 'Admin Login | RRDP'
  },

  {
    path: 'admin',
    component: AdminComponent,
    title: 'Admin Dashboard | RRDP'
  },

  {
    path: 'admin/schedule',
    component: AdminComponent,
    data: {
      view: 'schedule'
    },
    title: 'Admin Schedule | RRDP'
  },

  {
    path: 'admin/prasad',
    component: AdminComponent,
    data: {
      view: 'prasad'
    },
    title: 'Admin Prasad | RRDP'
  },

  {
    path: 'admin/capacity',
    component: AdminComponent,
    data: {
      view: 'capacity'
    },
    title: 'Admin Capacity | RRDP'
  },

  {
    path: 'admin/bookings',
    component: AdminComponent,
    data: {
      view: 'bookings'
    },
    title: 'Admin Bookings | RRDP'
  },

  {
    path: 'admin/delivery',
    component: AdminComponent,
    data: {
      view: 'delivery'
    },
    title: 'Admin Delivery | RRDP'
  },

  {
    path: 'admin/live',
    component: AdminComponent,
    data: {
      view: 'live'
    },
    title: 'Admin Live Stream | RRDP'
  },


  /* =====================================================
     FALLBACK
  ===================================================== */

  {
    path: '**',
    redirectTo: ''
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        scrollPositionRestoration: 'enabled'
      }
    )
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
