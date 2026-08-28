import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProtectedExperience } from '../../core/models/models';
import { AccessVerificationService } from '../../core/services/access-verification.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  experience: ProtectedExperience = 'BHOG';
  codeSent = false;
  verifying = false;
  error = '';
  returnUrl = '/prasad';

  form = this.fb.group({
    contact: ['', [Validators.required]],
    code: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private access: AccessVerificationService) {}

  ngOnInit(): void {
    this.experience = this.route.snapshot.queryParamMap.get('experience') === 'QUICK_DARSHAN' ? 'QUICK_DARSHAN' : 'BHOG';
    const selectedProduct = this.route.snapshot.queryParamMap.get('product');
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || (selectedProduct ? `/booking?product=${encodeURIComponent(selectedProduct)}` : (this.experience === 'QUICK_DARSHAN' ? '/quick-darshan' : '/prasad'));
  }

  get title(): string { return this.experience === 'QUICK_DARSHAN' ? 'शीघ्र दर्शन' : 'प्रसाद / भोग'; }
  get summary(): string { return this.experience === 'QUICK_DARSHAN' ? 'विशेष प्रवेश स्लॉट बुक करने से पहले अपनी पहचान सत्यापित करें।' : 'भोग और प्रसाद सेवा देखने से पहले अपनी पहचान सत्यापित करें।'; }

  sendCode(): void {
    const contact = this.form.value.contact?.trim() || '';
    if (!contact) { this.form.get('contact')?.markAsTouched(); return; }
    this.error = '';
    this.access.requestCode(contact, this.experience).subscribe(() => this.codeSent = true);
  }

  verify(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.verifying = true;
    this.error = '';
    this.access.verifyCode(this.form.value.contact?.trim() || '', this.form.value.code || '', this.experience).subscribe(valid => {
      this.verifying = false;
      if (valid) { this.router.navigateByUrl(this.returnUrl); return; }
      this.error = 'Verification code सही नहीं है। कृपया फिर से प्रयास करें।';
    });
  }
}
