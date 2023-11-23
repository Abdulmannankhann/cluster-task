import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { GotHousesComponent } from './got-houses/got-houses.component';
import { GotPersonsComponent } from './got-persons/got-persons.component';
import { GotQuotesComponent } from './got-quotes/got-quotes.component';
import { Error404Component } from './error-404/error-404.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GotHouseSubComponentComponent } from './got-house-sub-component/got-house-sub-component.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GotHousesComponent,
    GotPersonsComponent,
    GotQuotesComponent,
    Error404Component,
    GotHouseSubComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
