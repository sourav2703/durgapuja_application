import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../../core/services/demo-data.service';
import {
  GalleryItem,
  PrasadProduct,
  PujaEvent,
  SiteContent,
  VideoItem
} from '../../core/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content?: SiteContent;

  events: PujaEvent[] = [];
  products: PrasadProduct[] = [];
  gallery: GalleryItem[] = [];
  videos: VideoItem[] = [];

  isLoading = true;

  constructor(private data: DemoDataService) {}

  ngOnInit(): void {
    this.loadHomeData();
  }

  private loadHomeData(): void {

    this.data.getSiteContent().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (error) => {
        console.error('Unable to load site content', error);
      }
    });

    this.data.getPujaSchedule().subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (error) => {
        console.error('Unable to load puja schedule', error);
      }
    });

    this.data.getPrasadProducts().subscribe({
      next: (data) => {
        this.products = data.slice(0, 4);
      },
      error: (error) => {
        console.error('Unable to load prasad products', error);
      }
    });

    this.data.getGallery().subscribe({
      next: (data) => {
        this.gallery = data;
      },
      error: (error) => {
        console.error('Unable to load gallery', error);
      }
    });

    this.data.getVideos().subscribe({
      next: (data) => {
        this.videos = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Unable to load videos', error);
        this.isLoading = false;
      }
    });
  }
}