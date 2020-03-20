import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private http: HttpClient) { }

  findLocation(location : String){

    return this.http
    .get("https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=f23886807b4153b0703e28909314691f")
    .pipe(map(Response => Response));

  }
}
