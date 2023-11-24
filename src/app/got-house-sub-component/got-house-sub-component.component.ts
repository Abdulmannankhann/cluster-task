import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-got-house-sub-component',
  templateUrl: './got-house-sub-component.component.html',
  styleUrls: ['./got-house-sub-component.component.css'],
})
export class GotHouseSubComponentComponent implements OnInit {
  subHouseParam: string = '';
  subHouse: any = {};
  loader: Boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe((params) => {
      this.subHouseParam = params['subHouse'];
    });
  }

  ngOnInit(): void {
    this.fetchHouses();
  }

  fetchHouses() {
    this.loader = true;
    this.http
      .get(`https://api.gameofthronesquotes.xyz/v1/house/${this.subHouseParam}`)
      .subscribe((data: any) => {
        this.subHouse = data[0];
        this.loader = false;
      });
  }
}
