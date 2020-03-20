import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  location : String = '';
  locationData : any;
   

  constructor(public welcomeService : WelcomeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  findLocation(){
    console.log(this.location,"Location")
    this.welcomeService.findLocation(this.location)
        .subscribe(location =>{
          console.log(location); 
          this.locationData = location;
          this.router.navigate(['dashboard']);
        },
        err=>{
          console.log(err);
        })
  }

}
