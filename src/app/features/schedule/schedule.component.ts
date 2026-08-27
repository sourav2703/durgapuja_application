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

  events: PujaEvent[] = [];

  grouped: { [key: string]: PujaEvent[] } = {};

  days: string[] = [];

  constructor(
    private data: DemoDataService
  ) {}

  ngOnInit(): void {
    this.loadSchedule();
  }

  private loadSchedule(): void {

    this.loading = true;
    this.error = false;

    this.data.getPujaSchedule().subscribe({
      next: (events: PujaEvent[]) => {

        this.events = events;

        this.groupEventsByDay();

        this.loading = false;
      },

      error: (error) => {

        console.error(
          'Unable to load puja schedule',
          error
        );

        this.error = true;
        this.loading = false;
      }
    });
  }

  private groupEventsByDay(): void {

    this.grouped = {};

    this.events.forEach((event: PujaEvent) => {

      if (!this.grouped[event.dayName]) {
        this.grouped[event.dayName] = [];
      }

      this.grouped[event.dayName].push(event);
    });

    this.days = Object.keys(this.grouped);
  }
}