import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-got-persons',
  templateUrl: './got-persons.component.html',
  styleUrls: ['./got-persons.component.css'],
})
export class GotPersonsComponent implements OnInit {
  loader: Boolean = false;
  persons: any = [];
  filteredPersons: any = [];
  search: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPersons();
  }

  fetchPersons() {
    this.loader = true;
    this.http
      .get('https://api.gameofthronesquotes.xyz/v1/characters')
      .subscribe((data: any) => {
        console.log(data);
        this.persons = data;
        this.filteredPersons = data;
        this.loader = false;
      });
  }

  onChange(searchInput: string) {
    this.search = searchInput;
    const filteredData = this.persons.filter((person: any) => {
      if (this.search.length > 0) {
        return person.name.toLowerCase().includes(this.search.toLowerCase());
      } else return person;
    });
    this.filteredPersons = filteredData;
  }
}
