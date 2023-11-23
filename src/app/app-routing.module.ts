import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotHousesComponent } from './got-houses/got-houses.component';
import { GotPersonsComponent } from './got-persons/got-persons.component';
import { GotQuotesComponent } from './got-quotes/got-quotes.component';
import { Error404Component } from './error-404/error-404.component';

const routes: Routes = [
  { path: 'got-houses', component: GotHousesComponent },
  { path: 'got-persons', component: GotPersonsComponent },
  { path: 'got-quotes', component: GotQuotesComponent },
  { path: '', redirectTo: 'got-houses', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
