import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SiteContent } from '../../core/models/models';
import { DemoDataService } from '../../core/services/demo-data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  about = false;

  content?: SiteContent;

  loading = true;

  error = false;

  constructor(
    private route: ActivatedRoute,
    private data: DemoDataService
  ) {}

  ngOnInit(): void {

    this.about =
      this.route.snapshot.data['page'] === 'about';

    this.loadContent();
  }

  private loadContent(): void {

    this.loading = true;
    this.error = false;

    this.data.getSiteContent().subscribe({
      next: (value: SiteContent) => {

        this.content = value;

        this.loading = false;
      },

      error: (error) => {

        console.error(
          'Unable to load site content',
          error
        );

        this.error = true;
        this.loading = false;
      }
    });
  }
}