import {
  Component,
  OnInit
} from '@angular/core';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import {
  DemoDataService
} from '../../core/services/demo-data.service';

import {
  LiveDarshanHistory,
  LiveStream
} from '../../core/models/models';


@Component({
  selector: 'app-live-darshan',
  templateUrl: './live-darshan.component.html',
  styleUrls: ['./live-darshan.component.css']
})
export class LiveDarshanComponent implements OnInit {

  stream?: LiveStream;

  safeUrl?: SafeResourceUrl;

  liveStreams: LiveStream[] = [];

  history: LiveDarshanHistory[] = [];

  loading = true;

  error = false;

  selectedYear = 2026;


  constructor(
    private data: DemoDataService,
    private sanitizer: DomSanitizer
  ) {}


  ngOnInit(): void {

    this.loadLiveData();

  }


  private loadLiveData(): void {

    this.loading = true;

    this.error = false;


    /*
     * Current / demo live stream
     */
    this.data.getLiveStream().subscribe({

      next: (stream: LiveStream) => {

        this.stream = stream;

        this.createSafeUrl(stream);

        this.loadSchedule();

      },

      error: (error) => {

        console.error(
          'Live stream loading error:',
          error
        );

        this.error = true;

        this.loading = false;

      }

    });

  }


  private loadSchedule(): void {

    /*
     * For now we use demo data.
     *
     * Later replace this with:
     *
     * this.liveDarshanService
     *     .getSchedule()
     */

    this.liveStreams = [

      {
        id: 1,
        title: 'षष्ठी संध्या आरती',
        description:
          'षष्ठी के पावन अवसर पर संध्या आरती का सीधा प्रसारण।',

        youtubeVideoId: '',

        eventDate: '2026-10-16',
        startTime: '07:00 PM',
        endTime: '08:00 PM',

        dayName: 'षष्ठी',

        venue:
          'Ranchi Railway Station Durga Puja Pandal',

        status: 'UPCOMING',
        isActive: true
      },


      {
        id: 2,
        title: 'सप्तमी आरती',
        description:
          'सप्तमी पूजा एवं संध्या आरती का Live Darshan।',

        youtubeVideoId: '',

        eventDate: '2026-10-17',
        startTime: '07:00 PM',
        endTime: '08:00 PM',

        dayName: 'सप्तमी',

        venue:
          'Ranchi Railway Station Durga Puja Pandal',

        status: 'UPCOMING',
        isActive: true
      },


      {
        id: 3,
        title: 'महाअष्टमी पूजा',
        description:
          'महाअष्टमी के विशेष पूजा कार्यक्रम का सीधा प्रसारण।',

        youtubeVideoId: '',

        eventDate: '2026-10-18',
        startTime: '09:00 AM',
        endTime: '11:00 AM',

        dayName: 'अष्टमी',

        venue:
          'Ranchi Railway Station Durga Puja Pandal',

        status: 'UPCOMING',
        isActive: true
      },


      {
        id: 4,
        title: 'संधि पूजा',
        description:
          'महाअष्टमी एवं महानवमी के संधिकाल की विशेष पूजा।',

        youtubeVideoId: '',

        eventDate: '2026-10-18',
        startTime: '10:30 PM',
        endTime: '11:30 PM',

        dayName: 'अष्टमी',

        venue:
          'Ranchi Railway Station Durga Puja Pandal',

        status: 'UPCOMING',
        isActive: true
      },


      {
        id: 5,
        title: 'महानवमी आरती',
        description:
          'महानवमी के अवसर पर विशेष पूजा एवं संध्या आरती।',

        youtubeVideoId: '',

        eventDate: '2026-10-19',
        startTime: '07:00 PM',
        endTime: '08:00 PM',

        dayName: 'नवमी',

        venue:
          'Ranchi Railway Station Durga Puja Pandal',

        status: 'UPCOMING',
        isActive: true
      },


      {
        id: 6,
        title: 'विजयादशमी एवं विसर्जन',
        description:
          'विजयादशमी के अवसर पर विशेष कार्यक्रम एवं विसर्जन।',

        youtubeVideoId: '',

        eventDate: '2026-10-20',
        startTime: '04:00 PM',
        endTime: '07:00 PM',

        dayName: 'दशमी',

        venue:
          'Ranchi Railway Station Durga Puja Pandal',

        status: 'UPCOMING',
        isActive: true
      }

    ];


    this.history = [

      {
        id: 101,

        title: 'महाअष्टमी पूजा',
        description:
          '2025 की महाअष्टमी पूजा एवं आरती के पावन क्षण।',

        eventDate: '2025-10-06',
        startTime: '09:00 AM',

        year: 2025,
        dayName: 'अष्टमी',

        thumbnailUrl:
          'https://images.unsplash.com/photo-1604608672516-f1b9f4b8f8c3?auto=format&fit=crop&w=900&q=80',

        youtubeVideoId:
          'dQw4w9WgXcQ',

        venue:
          'Ranchi Railway Station Durga Puja Pandal',

        isActive: true
      },


      {
        id: 102,

        title: 'संध्या आरती',
        description:
          '2025 की संध्या आरती का विशेष दर्शन।',

        eventDate: '2025-10-07',
        startTime: '07:00 PM',

        year: 2025,
        dayName: 'नवमी',

        thumbnailUrl:
          'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=80',

        youtubeVideoId:
          'dQw4w9WgXcQ',

        venue:
          'Ranchi Railway Station Durga Puja Pandal',

        isActive: true
      },


      {
        id: 103,

        title: 'विजयादशमी एवं विसर्जन',
        description:
          'विजयादशमी एवं विसर्जन के पावन moments।',

        eventDate: '2025-10-08',
        startTime: '04:00 PM',

        year: 2025,
        dayName: 'दशमी',

        thumbnailUrl:
          'https://images.unsplash.com/photo-1604866830893-c13cafa515d5?auto=format&fit=crop&w=900&q=80',

        youtubeVideoId:
          'dQw4w9WgXcQ',

        venue:
          'Ranchi Railway Station Durga Puja Pandal',

        isActive: true
      }

    ];


    this.loading = false;

  }


  private createSafeUrl(stream: LiveStream): void {

    this.safeUrl = undefined;


    if (!stream.youtubeVideoId) {
      return;
    }


    this.safeUrl =
      this.sanitizer
        .bypassSecurityTrustResourceUrl(
          'https://www.youtube-nocookie.com/embed/' +
          stream.youtubeVideoId
        );

  }


  get currentLive(): LiveStream | undefined {

    return this.liveStreams.find(
      item => item.status === 'LIVE'
    );

  }


  get upcomingStreams(): LiveStream[] {

    return this.liveStreams
      .filter(
        item => item.status === 'UPCOMING'
      )
      .sort(
        (a, b) =>
          new Date(a.eventDate).getTime() -
          new Date(b.eventDate).getTime()
      );

  }


  get recentlyEnded(): LiveStream[] {

    return this.liveStreams
      .filter(
        item =>
          item.status === 'ENDED' &&
          !!item.youtubeVideoId
      )
      .sort(
        (a, b) =>
          new Date(b.eventDate).getTime() -
          new Date(a.eventDate).getTime()
      );

  }


  get archiveYears(): number[] {

    return [
      ...new Set(
        this.history
          .filter(item => item.isActive)
          .map(item => item.year)
      )
    ].sort(
      (a, b) => b - a
    );

  }


  get filteredHistory(): LiveDarshanHistory[] {

    return this.history
      .filter(
        item =>
          item.isActive &&
          item.year === this.selectedYear
      )
      .sort(
        (a, b) =>
          new Date(b.eventDate).getTime() -
          new Date(a.eventDate).getTime()
      );

  }


  selectYear(year: number): void {

    this.selectedYear = year;

  }


  getYoutubeUrl(videoId: string): string {

    return 'https://www.youtube.com/watch?v=' + videoId;

  }


  trackById(
    index: number,
    item: LiveStream | LiveDarshanHistory
  ): number {

    return item.id;

  }

}