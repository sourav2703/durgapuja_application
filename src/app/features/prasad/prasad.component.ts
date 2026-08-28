import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrasadProduct } from '../../core/models/models';
import { DemoDataService } from '../../core/services/demo-data.service';

@Component({
  selector: 'app-prasad',
  templateUrl: './prasad.component.html',
  styleUrls: ['./prasad.component.css']
})
export class PrasadComponent implements OnInit {
  products: PrasadProduct[] = [];
  loading = true;
  error = false;
  selectedProductId?: number;
  private requestedProductId?: number;

  constructor(private data: DemoDataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.requestedProductId = Number(params.get('product')) || undefined;
      this.updateSelectedProduct();
    });

    this.data.getPrasadProducts().subscribe({
      next: products => {
        this.products = products.filter(product => product.isActive);
        this.loading = false;
        this.updateSelectedProduct();
      },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  openBooking(productId: number): void {
    this.router.navigate([], { relativeTo: this.route, queryParams: { product: productId } });
  }

  closeBooking(): void { this.router.navigate(['/prasad']); }

  getAvailabilityPercent(product: PrasadProduct): number {
    return product.capacity > 0 ? Math.min(100, Math.max(0, (product.availability / product.capacity) * 100)) : 0;
  }

  getAvailabilityText(product: PrasadProduct): string {
    if (!product.availability) { return 'Booking Full'; }
    if (product.availability < product.capacity * 0.25) { return 'Limited Availability'; }
    return 'Available';
  }

  trackById(index: number, product: PrasadProduct): number { return product.id; }

  private updateSelectedProduct(): void {
    this.selectedProductId = this.requestedProductId && this.products.some(product => product.id === this.requestedProductId)
      ? this.requestedProductId
      : undefined;
  }
}
