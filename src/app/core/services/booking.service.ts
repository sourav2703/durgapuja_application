import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';
import { Booking, BookingItem, CollectionMethod, DeliveryAddress, DeliveryZone, Payment } from '../models/models';

export interface BookingRequest { name: string; mobile: string; email: string; eventDate: string; item: BookingItem; collectionMethod: CollectionMethod; deliveryAddress?: DeliveryAddress; deliveryZone?: DeliveryZone; }
@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly confirmation = new BehaviorSubject<Booking | null>(null);
  readonly confirmation$ = this.confirmation.asObservable();
  calculateTotal(item: BookingItem, collectionMethod: CollectionMethod, zone?: DeliveryZone): { prasadAmount: number; deliveryCharge: number; total: number } {
    const prasadAmount = item.unitPrice * item.quantity;
    const deliveryCharge = collectionMethod === 'HOME_DELIVERY' ? (zone?.charge ?? 0) : 0;
    return { prasadAmount, deliveryCharge, total: prasadAmount + deliveryCharge };
  }
  isDeliveryAvailable(zone?: DeliveryZone): boolean { return !!zone?.isSupported; }
  createBooking(request: BookingRequest): Observable<Booking> {
    const amounts = this.calculateTotal(request.item, request.collectionMethod, request.deliveryZone);
    const booking: Booking = { id: `RRP-2026-${String(Math.floor(100000 + Math.random() * 899999))}`, customerName: request.name, mobile: request.mobile, email: request.email, eventDate: request.eventDate, item: request.item, collectionMethod: request.collectionMethod, deliveryAddress: request.deliveryAddress, prasadAmount: amounts.prasadAmount, deliveryCharge: amounts.deliveryCharge, totalAmount: amounts.total, status: 'PENDING', createdAt: new Date().toISOString() };
    this.confirmation.next(booking); return of(booking).pipe(delay(500));
  }
  simulatePayment(booking: Booking): Observable<Payment> { const paid = { bookingId: booking.id, amount: booking.totalAmount, status: 'SUCCESS' as const, transactionId: `DEMO-${Date.now()}` }; this.confirmation.next({ ...booking, status: 'CONFIRMED' }); return of(paid).pipe(delay(800)); }
  currentBooking(): Booking | null { return this.confirmation.value; }
}
