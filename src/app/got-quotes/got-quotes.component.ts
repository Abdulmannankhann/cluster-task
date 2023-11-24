import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-got-quotes',
  templateUrl: './got-quotes.component.html',
  styleUrls: ['./got-quotes.component.css'],
})
export class GotQuotesComponent implements OnInit {
  loader: Boolean = false;
  quotes: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchQuotes();
  }

  fetchQuotes() {
    this.loader = true;
    this.http
      .get('https://api.gameofthronesquotes.xyz/v1/random/5')
      .subscribe((data: any) => {
        console.log(data);
        this.quotes = data;
        this.loader = false;
      });
  }
}
