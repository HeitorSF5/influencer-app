import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListComponent } from '../list/list.component';
import { DashboardNavComponent } from '../dashboard-nav/dashboard-nav.component';
import { FormInfluComponent } from '../form-influ/form-influ.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent, ListComponent, DashboardNavComponent, FormInfluComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule]
    });
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testingController = TestBed.inject(HttpTestingController)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
