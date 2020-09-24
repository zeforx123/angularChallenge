import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private service: HomeService) {}

  data;
  settings;
  subscription: Subscription;

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.subscription = this.service.getData().subscribe((response) => {
      this.data = response.results;
      this.subscription.unsubscribe();
    });
    this.settings = this.service.settings;
  }
}
