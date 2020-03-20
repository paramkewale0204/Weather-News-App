import { Component, OnInit, Input } from '@angular/core';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
    console.log("Test", this.data);
  }

}
