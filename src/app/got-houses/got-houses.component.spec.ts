import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotHousesComponent } from './got-houses.component';

describe('GotHousesComponent', () => {
  let component: GotHousesComponent;
  let fixture: ComponentFixture<GotHousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotHousesComponent]
    });
    fixture = TestBed.createComponent(GotHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
