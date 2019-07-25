import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

   url = 'https://honoredfortunateprogrammers--vigneshwaran3.repl.co'; // for temporary to host
 // url = 'http://localhost:8077/get-random-number';

  getRandomNumber(params) {
    return this.http.get(`${this.url}`, {params, observe: 'response'});
  }
}
