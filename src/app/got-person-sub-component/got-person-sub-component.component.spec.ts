import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotPersonSubComponentComponent } from './got-person-sub-component.component';

describe('GotPersonSubComponentComponent', () => {
  let component: GotPersonSubComponentComponent;
  let fixture: ComponentFixture<GotPersonSubComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotPersonSubComponentComponent]
    });
    fixture = TestBed.createComponent(GotPersonSubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
