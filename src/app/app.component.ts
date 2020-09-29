import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-stock';
  states = [
    { symbol: 'AL', name: 'Alabama' },
    { symbol: 'CA', name: 'California' },
    { symbol: 'FL', name: 'Florida' },
    { symbol: 'NY', name: 'New York' },
  ];

  selectedState: string;
  ngOnInit() {
    this.selectedState = '';
  }
  stateClicked(state) {
    this.selectedState = state;
  }
}
