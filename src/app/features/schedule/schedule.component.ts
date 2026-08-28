import { Component, OnInit } from '@angular/core';

import { DemoDataService } from '../../core/services/demo-data.service';
import { PujaEvent } from '../../core/models/models';

@Component({
  selector: 'app-schedule',

  templateUrl: './schedule.component.html',

  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  loading = true;

  error = false;

  grouped: { [key: string]: PujaEvent[] } = {};

  days: string[] = [];


  constructor(
    private data: DemoDataService
  ) {}


  ngOnInit(): void {

    this.data.getPujaSchedule().subscribe({

      next: (events: PujaEvent[]) => {

        this.grouped = events.reduce(

          (
            result: { [key: string]: PujaEvent[] },
            event: PujaEvent
          ) => {

            if (!result[event.dayName]) {
              result[event.dayName] = [];
            }

            result[event.dayName].push(event);

            return result;

          },

          {}
        );


        this.days = Object.keys(this.grouped);

        this.loading = false;
      },


      error: () => {

        this.error = true;

        this.loading = false;

      }

    });

  }


  getDaySubtitle(index: number): string {

    if (index === 0) {
      return 'पूजा आरंभ';
    }

    if (index === this.days.length - 1) {
      return 'विजयादशमी एवं समापन';
    }

    return 'शारदीय नवरात्रि उत्सव';
  }


  isAarti(event: PujaEvent): boolean {

    return event.eventName
      .toLowerCase()
      .includes('आरती');

  }


  isSpecial(event: PujaEvent): boolean {

    const name = event.eventName.toLowerCase();

    return (
      name.includes('संधि') ||
      name.includes('महानवमी') ||
      name.includes('नवपत्रिका') ||
      name.includes('बेल')
    );

  }

}