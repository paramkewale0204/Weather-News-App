import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  findNews(location : String){
    return this.http
    .get("http://newsapi.org/v2/top-headlines?country="+location+"&apiKey=9b392fc6070044498b4bb0ebbabc6555")
    .pipe(map(Response => Response));
  }
}
