import { Component, OnInit } from '@angular/core';

import { DemoDataService } from '../../../core/services/demo-data.service';
import { VideoItem } from '../../../core/models/models';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  items: VideoItem[] = [];

  selected: VideoItem | null = null;

  loading = true;

  error = false;

  constructor(
    private data: DemoDataService
  ) {}

  ngOnInit(): void {

    this.data.getVideos().subscribe({
      next: (items: VideoItem[]) => {

        this.items = items;

        this.loading = false;
      },

      error: (error) => {

        console.error('Unable to load videos', error);

        this.error = true;

        this.loading = false;
      }
    });
  }

  openVideo(video: VideoItem): void {

    this.selected = video;
  }

  closeVideo(): void {

    this.selected = null;
  }

  getYoutubeUrl(videoId: string): string {

    return `https://www.youtube.com/watch?v=${videoId}`;
  }
}