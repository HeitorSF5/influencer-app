import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfluComponent } from './form-influ.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormInfluComponent', () => {
  let component: FormInfluComponent;
  let fixture: ComponentFixture<FormInfluComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInfluComponent],
      imports: [ReactiveFormsModule, FormsModule]
    });
    fixture = TestBed.createComponent(FormInfluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
