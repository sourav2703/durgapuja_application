import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** Keeps historic /booking links working while the booking UI lives inside /prasad. */
@Component({ selector: 'app-booking-redirect', template: '' })
export class BookingRedirectComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/prasad'], {
      queryParams: this.route.snapshot.queryParams,
      replaceUrl: true
    });
  }
}
