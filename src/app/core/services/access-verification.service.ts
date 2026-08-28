import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AccessVerification, ProtectedExperience } from '../models/models';

/** Demo OTP provider. Replace requestCode/verifyCode with the future .NET API without changing pages or guards. */
@Injectable({ providedIn: 'root' })
export class AccessVerificationService {
  private readonly verified = new Map<ProtectedExperience, AccessVerification>();

  requestCode(contact: string, experience: ProtectedExperience): Observable<boolean> {
    return of(!!contact && !!experience).pipe(delay(450));
  }

  verifyCode(contact: string, code: string, experience: ProtectedExperience): Observable<boolean> {
    const valid = code === '123456';
    if (valid) {
      this.verified.set(experience, { experience, contact, verifiedAt: new Date().toISOString() });
    }
    return of(valid).pipe(delay(550));
  }

  isVerified(experience: ProtectedExperience): boolean { return this.verified.has(experience); }
  getVerification(experience: ProtectedExperience): AccessVerification | undefined { return this.verified.get(experience); }
}
