import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotPersonsComponent } from './got-persons.component';

describe('GotPersonsComponent', () => {
  let component: GotPersonsComponent;
  let fixture: ComponentFixture<GotPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotPersonsComponent]
    });
    fixture = TestBed.createComponent(GotPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
