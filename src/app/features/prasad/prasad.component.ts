import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../../core/services/demo-data.service';
import { PrasadProduct } from '../../core/models/models';

@Component({
  selector: 'app-prasad',
  templateUrl: './prasad.component.html',
  styleUrls: ['./prasad.component.css']
})
export class PrasadComponent implements OnInit {

  products: PrasadProduct[] = [];

  constructor(
    private data: DemoDataService
  ) {}

  ngOnInit(): void {
    this.data
      .getPrasadProducts()
      .subscribe(v => this.products = v);
  }
}