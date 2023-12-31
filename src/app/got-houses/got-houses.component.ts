import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-got-houses',
  templateUrl: './got-houses.component.html',
  styleUrls: ['./got-houses.component.css'],
})
export class GotHousesComponent implements OnInit {
  houses: any = [];
  filteredHouses: any = [];
  search: string = '';
  subHouse: any = {};
  showSubHouse: Boolean = false;
  loader: Boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchHouses();
  }

  fetchHouses() {
    this.loader = true;
    this.http
      .get('https://api.gameofthronesquotes.xyz/v1/houses')
      .subscribe((data) => {
        this.houses = data;
        this.filteredHouses = data;
        this.loader = false;
      });
  }

  onChange(searchInput: string) {
    this.search = searchInput;
    const filteredData = this.houses.filter((house: any) => {
      if (this.search.length > 0) {
        return house.name.toLowerCase().includes(this.search.toLowerCase());
      } else return house;
    });
    this.filteredHouses = filteredData;
  }
}
