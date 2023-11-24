import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotHousesComponent } from './got-houses/got-houses.component';
import { GotPersonsComponent } from './got-persons/got-persons.component';
import { GotQuotesComponent } from './got-quotes/got-quotes.component';
import { Error404Component } from './error-404/error-404.component';
import { GotHouseSubComponentComponent } from './got-house-sub-component/got-house-sub-component.component';
import { GotPersonSubComponentComponent } from './got-person-sub-component/got-person-sub-component.component';

const routes: Routes = [
  { path: 'got-houses', component: GotHousesComponent },
  { path: 'got-houses/:subHouse', component: GotHouseSubComponentComponent },
  { path: 'got-persons', component: GotPersonsComponent },
  { path: 'got-persons/:subPerson', component: GotPersonSubComponentComponent },
  { path: 'got-quotes', component: GotQuotesComponent },
  { path: '', redirectTo: 'got-houses', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
