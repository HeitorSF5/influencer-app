import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNumberComponent } from './filter-number.component';

describe('FilterNumberComponent', () => {
  let component: FilterNumberComponent;
  let fixture: ComponentFixture<FilterNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterNumberComponent]
    });
    fixture = TestBed.createComponent(FilterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
