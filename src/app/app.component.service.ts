import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080';
  getRandomNumber(params) {
    return this
            .http
            .get(`${this.url}/characters`, {params});
  }
}