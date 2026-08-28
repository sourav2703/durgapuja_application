import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// =====================================================
// LAYOUT
// =====================================================

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';


// =====================================================
// SHARED COMPONENTS
// =====================================================

import { SectionTitleComponent } from './shared/components/section-title.component';
import { PageHeaderComponent } from './shared/components/page-header.component';
import { OrderSummaryComponent } from './shared/components/order-summary.component';


// =====================================================
// PUBLIC FEATURES
// =====================================================

import { HomeComponent } from './features/home/home.component';
import { ScheduleComponent } from './features/schedule/schedule.component';
import { LiveDarshanComponent } from './features/live-darshan/live-darshan.component';

import { PrasadComponent } from './features/prasad/prasad.component';

import { BookingComponent } from './features/booking/booking.component';
import { ConfirmationComponent } from './features/booking/confirmation.component';
import { BookingRedirectComponent } from './features/booking/booking-redirect.component';


// =====================================================
// MEDIA
// =====================================================

import { GalleryComponent } from './features/media/gallery/gallery.component';
import { VideosComponent } from './features/media/videos/videos.component';


// =====================================================
// INFORMATION
// =====================================================

import { InfoComponent } from './features/info/info.component';


// =====================================================
// ADMIN
// =====================================================

import { AdminComponent } from './features/admin/admin.component';
import { AdminLoginComponent } from './features/admin/admin-login.component';
import { AccessComponent } from './features/access/access.component';
import { QuickDarshanComponent } from './features/quick-darshan/quick-darshan.component';


// =====================================================
// INTERCEPTOR
// =====================================================

import { ApiPreparationInterceptor } from './core/interceptors/api-preparation.interceptor';
import { SafeUrlPipe } from './core/pipes/safe-url.pipe';


@NgModule({

  declarations: [

    // App
    AppComponent,
SafeUrlPipe,

    // Layout
    HeaderComponent,
    FooterComponent,


    // Shared
    SectionTitleComponent,
    PageHeaderComponent,
    OrderSummaryComponent,


    // Public
    HomeComponent,
    ScheduleComponent,
    LiveDarshanComponent,
    PrasadComponent,
    BookingComponent,
    ConfirmationComponent,
    BookingRedirectComponent,


    // Media
    GalleryComponent,
    VideosComponent,


    // Information
    InfoComponent,


    // Admin
    AdminComponent,
    AdminLoginComponent,
    AccessComponent,
    QuickDarshanComponent

  ],


  imports: [

    BrowserModule,

    HttpClientModule,

    ReactiveFormsModule,

    AppRoutingModule

  ],


  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPreparationInterceptor,
      multi: true
    }

  ],


  bootstrap: [
    AppComponent
  ]

})
export class AppModule {}
