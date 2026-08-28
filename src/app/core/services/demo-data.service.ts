import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Booking, DashboardSummary, DeliveryZone, GalleryItem, LiveStream, PrasadProduct, PujaEvent, QuickDarshanConfig, SiteContent, VideoItem } from '../models/models';
import { DASHBOARD, DELIVERY_ZONES, DEMO_BOOKINGS, GALLERY_ITEMS, LIVE_STREAM, PRASAD_PRODUCTS, PUJA_EVENTS, QUICK_DARSHAN_CONFIG, SITE_CONTENT, VIDEO_ITEMS } from '../../mock-data/demo.mock';

export interface PujaScheduleProvider { getPujaSchedule(): Observable<PujaEvent[]>; }
export interface PrasadProvider { getPrasadProducts(): Observable<PrasadProduct[]>; }
export interface ContentProvider { getSiteContent(): Observable<SiteContent>; }

@Injectable({ providedIn: 'root' })
export class DemoDataService implements PujaScheduleProvider, PrasadProvider, ContentProvider {
  private readonly responseDelay = 380;
  getSiteContent(): Observable<SiteContent> { return of(SITE_CONTENT).pipe(delay(this.responseDelay)); }
  getPujaSchedule(): Observable<PujaEvent[]> { return of(PUJA_EVENTS).pipe(delay(this.responseDelay)); }
  getPrasadProducts(): Observable<PrasadProduct[]> { return of(PRASAD_PRODUCTS).pipe(delay(this.responseDelay)); }
  getLiveStream(): Observable<LiveStream> { return of(LIVE_STREAM).pipe(delay(this.responseDelay)); }
  getGallery(): Observable<GalleryItem[]> { return of(GALLERY_ITEMS).pipe(delay(this.responseDelay)); }
  getVideos(): Observable<VideoItem[]> { return of(VIDEO_ITEMS).pipe(delay(this.responseDelay)); }
  getDeliveryZones(): Observable<DeliveryZone[]> { return of(DELIVERY_ZONES).pipe(delay(this.responseDelay)); }
  getQuickDarshanConfig(): Observable<QuickDarshanConfig> { return of(QUICK_DARSHAN_CONFIG).pipe(delay(this.responseDelay)); }
  getBookings(): Observable<Booking[]> { return of(DEMO_BOOKINGS).pipe(delay(this.responseDelay)); }
  getDashboard(): Observable<DashboardSummary> { return of(DASHBOARD).pipe(delay(this.responseDelay)); }
}
