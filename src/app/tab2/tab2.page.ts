import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: Object[] = [];

  constructor(
    private router: Router,
    private http: HttpClient
    ) {}

  ionViewWillEnter() {
    this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=9e2c197e097a0dd78e5aef2dffedbcdb')
    .subscribe(response => {
      console.log(response);
      this.items = response["results"];
    });    
  }

  navToMovie() {
    // Naviguer avec le routeur...
    this.router.navigate(["/movie"]);
  }

}
