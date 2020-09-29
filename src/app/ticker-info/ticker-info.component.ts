import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DataService } from 'src/shared/data.service';
import { switchMap } from 'rxjs/operators';
import { CovidInfo } from 'src/models/covid-info';

@Component({
  selector: 'app-ticker-info',
  templateUrl: './ticker-info.component.html',
  styleUrls: ['./ticker-info.component.css'],
})
export class TickerInfoComponent implements OnInit {
  @Input() ticker: any;

  covidInfo: CovidInfo;
  subscription: Subscription;
  covidInformation: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.covidInfo = null;

    if (this.ticker && this.ticker.symbol !== '') {
      this.subscription = this.dataService
        .getStateInformation(this.ticker.symbol)
        .subscribe((result) => {
          let response: any;
          response = result;

          this.covidInformation = response;

          this.covidInfo = new CovidInfo();

          this.covidInfo.total = this.covidInformation.total;
          this.covidInfo.pending = this.covidInformation.pending;
          this.covidInfo.positive = this.covidInformation.positive;
          this.covidInfo.negative = this.covidInformation.negative;
        });
    }
  }

  ngOnDestroy() {
    this.covidInformation = null;
    this.subscription.unsubscribe();
  }
}
