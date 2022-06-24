import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: Object[] = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=9e2c197e097a0dd78e5aef2dffedbcdb')
      // .pipe(
      //   map(response => response['results'])
      // )
      .subscribe(response => {
        console.log(response);
        this.items = response["results"];
      });      
  }

}
