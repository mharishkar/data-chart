import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'https://honoredfortunateprogrammers--five-nine.repl.co';

  getRandomNumber(params) {
    let body = { param: params};
    return this.http.post(`${this.url}`, body, {observe: 'response'});
  }
}