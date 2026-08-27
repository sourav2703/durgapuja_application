import { Component, OnInit } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import { DemoDataService } from '../../core/services/demo-data.service';
import { LiveStream } from '../../core/models/models';

@Component({
  selector: 'app-live-darshan',
  templateUrl: './live-darshan.component.html',
  styleUrls: ['./live-darshan.component.css']
})
export class LiveDarshanComponent implements OnInit {

  stream?: LiveStream;

  safeUrl?: SafeResourceUrl;

  loading = true;

  error = false;

  constructor(
    private data: DemoDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadLiveStream();
  }

  private loadLiveStream(): void {

    this.loading = true;
    this.error = false;

    this.data.getLiveStream().subscribe({
      next: (stream: LiveStream) => {

        this.stream = stream;

        if (stream && stream.youtubeVideoId) {

          const youtubeUrl =
            `https://www.youtube-nocookie.com/embed/${stream.youtubeVideoId}`;

          this.safeUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(
              youtubeUrl
            );
        }

        this.loading = false;
      },

      error: (error) => {

        console.error(
          'Unable to load live stream',
          error
        );

        this.error = true;
        this.loading = false;
      }
    });
  }
}