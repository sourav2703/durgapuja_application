import { Component, OnInit } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import { DemoDataService } from '../../core/services/demo-data.service';
import { LiveStream } from '../../core/models/models';


interface UpcomingDarshan {
  id: number;
  title: string;
  description: string;
  eventDate: string;
  startTime: string;
  dayName: string;
}


interface LiveRecording {
  id: number;
  title: string;
  description: string;
  eventDate: string;
  thumbnailUrl: string;
  youtubeVideoId: string;
}


@Component({
  selector: 'app-live-darshan',
  templateUrl: './live-darshan.component.html',
  styleUrls: ['./live-darshan.component.css']
})
export class LiveDarshanComponent implements OnInit {

  /* =====================================================
     LIVE STREAM
  ===================================================== */

  stream: LiveStream | null = null;

  safeUrl: SafeResourceUrl | null = null;

  loading = true;

  error = false;


  /* =====================================================
     RECORDING MODAL
  ===================================================== */

  selectedRecording: LiveRecording | null = null;

  recordingUrl: SafeResourceUrl | null = null;


  /* =====================================================
     UPCOMING DARSHAN
  ===================================================== */

  upcomingStreams: UpcomingDarshan[] = [

    {
      id: 1,
      title: 'षष्ठी संध्या आरती',
      description:
        'षष्ठी के अवसर पर विशेष संध्या आरती का Live Darshan।',
      eventDate: '2026-10-17',
      startTime: '06:30 PM',
      dayName: 'षष्ठी'
    },

    {
      id: 2,
      title: 'महाअष्टमी संधि पूजा',
      description:
        'अष्टमी एवं नवमी के संधिकाल में विशेष पूजा एवं आरती।',
      eventDate: '2026-10-20',
      startTime: '07:30 PM',
      dayName: 'महाअष्टमी'
    },

    {
      id: 3,
      title: 'महानवमी संध्या आरती',
      description:
        'महानवमी के पावन अवसर पर विशेष संध्या आरती।',
      eventDate: '2026-10-21',
      startTime: '07:00 PM',
      dayName: 'महानवमी'
    }

  ];


  /* =====================================================
     RECENTLY ENDED LIVE DARSHAN

     Real YouTube devotional video used for demo.
  ===================================================== */

  recentlyEnded: LiveRecording[] = [

    {
  id: 1,

  title: 'Chaitra Navratri Special — Durga Bhajans & Mantra',

  description:
    'माँ दुर्गा के भजन, मंत्र और नवरात्रि भक्ति से जुड़ा विशेष devotional कार्यक्रम।',

  eventDate: '2026-03-18',

  thumbnailUrl:
    'https://i.ytimg.com/vi/7SZLPtUvJCw/hqdefault.jpg',

  youtubeVideoId:
    '7SZLPtUvJCw'
}

  ];


  constructor(
    private data: DemoDataService,
    private sanitizer: DomSanitizer
  ) {}


  /* =====================================================
     INIT
  ===================================================== */

  ngOnInit(): void {

    this.data.getLiveStream().subscribe({

      next: (stream: LiveStream) => {

        this.stream = stream;

        this.loading = false;

        this.error = false;


        /* ===============================================
           LIVE YOUTUBE VIDEO
        =============================================== */

        if (
          stream.isActive &&
          stream.youtubeVideoId
        ) {

          this.safeUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(

              'https://www.youtube-nocookie.com/embed/' +
              stream.youtubeVideoId +
              '?rel=0'

            );

        } else {

          this.safeUrl = null;

        }

      },


      error: () => {

        this.loading = false;

        this.error = true;

        this.stream = null;

        this.safeUrl = null;

      }

    });

  }


  /* =====================================================
     OPEN RECORDING
  ===================================================== */

  openRecording(
    item: LiveRecording
  ): void {

    this.selectedRecording = item;

    this.recordingUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(

        'https://www.youtube-nocookie.com/embed/' +
        item.youtubeVideoId +
        '?rel=0&autoplay=1'

      );

  }


  /* =====================================================
     CLOSE RECORDING
  ===================================================== */

  closeRecording(): void {

    this.selectedRecording = null;

    this.recordingUrl = null;

  }


  /* =====================================================
     YOUTUBE URL
  ===================================================== */

  getYoutubeUrl(
    videoId: string
  ): string {

    return 'https://www.youtube.com/watch?v=' + videoId;

  }


  /* =====================================================
     TRACK BY
  ===================================================== */

  trackById(
    index: number,
    item: UpcomingDarshan | LiveRecording
  ): number {

    return item.id;

  }

}