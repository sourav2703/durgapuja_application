import { Component, OnInit } from '@angular/core';

import { DemoDataService } from '../../../core/services/demo-data.service';
import { GalleryItem } from '../../../core/models/models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  items: GalleryItem[] = [];

  category = 'All';

  categories: string[] = [
    'All',
    'Puja',
    'Pandal',
    'Aarti',
    'Bhog',
    'Events',
    '2025',
    '2024'
  ];

  loading = true;

  error = false;

  selectedImage: GalleryItem | null = null;

  constructor(
    private data: DemoDataService
  ) {}

  ngOnInit(): void {
    this.loadGallery();
  }

  private loadGallery(): void {

    this.loading = true;
    this.error = false;

    this.data.getGallery().subscribe({
      next: (items: GalleryItem[]) => {

        console.log('Gallery data:', items);

        this.items = items || [];

        this.loading = false;
      },

      error: (error) => {

        console.error('Gallery API/Data error:', error);

        this.items = [];

        this.error = true;

        this.loading = false;
      }
    });
  }

  get filtered(): GalleryItem[] {

    if (this.category === 'All') {
      return this.items;
    }

    return this.items.filter((item: GalleryItem) => {

      return (
        item.category === this.category ||
        String(item.year) === this.category
      );

    });
  }

  selectCategory(category: string): void {

    this.category = category;
  }

  openImage(item: GalleryItem): void {

    this.selectedImage = item;
  }

  closeImage(): void {

    this.selectedImage = null;
  }
}