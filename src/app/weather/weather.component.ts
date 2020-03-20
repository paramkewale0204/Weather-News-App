import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  location : String = '';
  locationData : any;
  showDetaits : boolean = false;
  locationName : String = "";
  temp : String = "";
  pressure : String = "";
  humidity : String = "";
  
  constructor(public welcomeService : WelcomeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  findWeather(){
    console.log(this.location,"Location")
    this.welcomeService.findLocation(this.location)
        .subscribe(location =>{          
          this.locationData = location;
          console.log(this.locationData);
          console.log(this.locationData.main);
          this.locationName = this.locationData.name;
          this.temp = this.locationData.main.temp;
          this.pressure = this.locationData.main.pressure;
          this.humidity = this.locationData.main.humidity;
          this.showDetaits = true;
        },
        err=>{
          console.log(err);
        })
  }

}
