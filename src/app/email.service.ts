import { Message } from './meassage';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {
  private post_url = 'http://172.23.238.209:8080/hackathon';
  constructor(private http: Http) { }

  postForm(message) {
    console.log(message);
    const headers = new Headers({"content-type": "application/json"})
    return this.http.post(this.post_url, message, {headers: headers}).map(results => results.json());
  }

}
