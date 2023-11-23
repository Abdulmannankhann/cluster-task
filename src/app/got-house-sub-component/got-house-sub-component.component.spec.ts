import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotHouseSubComponentComponent } from './got-house-sub-component.component';

describe('GotHouseSubComponentComponent', () => {
  let component: GotHouseSubComponentComponent;
  let fixture: ComponentFixture<GotHouseSubComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotHouseSubComponentComponent]
    });
    fixture = TestBed.createComponent(GotHouseSubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
