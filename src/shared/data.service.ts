import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private api = 'https://api.covidtracking.com/v1/states/{0}/current.json';

  constructor(private httpClient: HttpClient) {}

  public getStateInformation(ticker) {
    let api = this.api.replace('{0}', ticker);

    return this.httpClient.get(api);
  }
}
