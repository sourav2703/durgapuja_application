import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccessVerificationService } from '../services/access-verification.service';
import { ProtectedExperience } from '../models/models';

@Injectable({ providedIn: 'root' })
export class VerifiedExperienceGuard implements CanActivate {
  constructor(private access: AccessVerificationService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const experience = (route.data['experience'] || (route.queryParamMap.get('type') === 'QUICK_DARSHAN' ? 'QUICK_DARSHAN' : 'BHOG')) as ProtectedExperience;
    if (this.access.isVerified(experience)) { return true; }
    this.router.navigate(['/access'], { queryParams: { experience, returnUrl: state.url } });
    return false;
  }
}
