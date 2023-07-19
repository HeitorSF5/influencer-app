import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { ListComponent } from './list.component';
import { DashboardNavComponent } from '../dashboard-nav/dashboard-nav.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FilterTextComponent } from '../filter-text/filter-text/filter-text.component';
import { FilterNumberComponent } from '../filter-number/filter-number/filter-number.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, DashboardNavComponent, FilterTextComponent, FilterNumberComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testingController = TestBed.inject(HttpTestingController)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
