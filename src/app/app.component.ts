import { Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs';
import { ApiService } from './services/api.service';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(

  ) {}

  ngOnInit() {
   
   
  }
  
}
