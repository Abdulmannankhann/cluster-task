import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-got-person-sub-component',
  templateUrl: './got-person-sub-component.component.html',
  styleUrls: ['./got-person-sub-component.component.css'],
})
export class GotPersonSubComponentComponent {
  subPersonParam: string = '';
  subPerson: any = {};
  loader: Boolean = false;
  quotesLoader: Boolean = false;
  quotes: any = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe((params) => {
      this.subPersonParam = params['subPerson'];
    });
  }

  ngOnInit(): void {
    this.fetchHouses();
  }

  fetchHouses() {
    this.loader = true;
    this.http
      .get(
        `https://api.gameofthronesquotes.xyz/v1/character/${this.subPersonParam}`
      )
      .subscribe((data: any) => {
        console.log(data[0]);
        this.subPerson = data[0];
        this.quotes = data[0]?.quotes;
        this.loader = false;
      });
  }

  fetchMoreQuotes() {
    this.quotesLoader = true;
    this.http
      .get(
        `https://api.gameofthronesquotes.xyz/v1/author/${this.subPerson.slug}/5`
      )
      .subscribe((data: any) => {
        console.log(data);
        const sortQuote = data.map((v: any) => {
          return v?.sentence;
        });
        this.quotes = sortQuote;
        this.quotesLoader = false;
      });
  }
}
