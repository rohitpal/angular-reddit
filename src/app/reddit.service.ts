import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RedditService {

  constructor(private http: HttpClient) { }

  getData(reddit_URL){
    return this.http.get(reddit_URL);
  }

}
