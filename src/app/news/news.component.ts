import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  location : String = '';
  locationData : any ;
  source: String = "";
  author: String = "";
  title: String = "";
  description : String = "";

  constructor(public newsService : NewsService) { }

  ngOnInit(): void {
  }

  findNews(){
    console.log(this.location,"Location")
    this.newsService.findNews(this.location)
        .subscribe(location =>{
           
          this.locationData = location;
          this.source = this.locationData.articles[0].source.name;
          this.author = this.locationData.articles[0].author;
          this.title = this.locationData.articles[0].title;
          this.description = this.locationData.articles[0].description;
          
          console.log(this.locationData.articles);
        },
        err=>{
          console.log(err);
        })
  }

}
