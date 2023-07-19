import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Influencer from 'src/interfaces/Influencer';

@Component({
  selector: 'app-form-influ',
  templateUrl: './form-influ.component.html',
  styleUrls: ['./form-influ.component.css']
})
export class FormInfluComponent {
  @Input() btnText!: string;
  @Input() name!: string;
  @Input() handle!: string;
  @Input() platform!: string;
  @Input() category!: string;
  @Input() subCount!: number;
  @Output() onSubmit = new EventEmitter<Influencer>();

  influForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.influForm = new FormGroup({
      name: new FormControl(this.name),
      handle: new FormControl(this.handle, Validators.pattern(/^@.*/)),
      platform: new FormControl(this.platform),
      category: new FormControl(this.category),
      subCount: new FormControl(this.subCount)
    });
  }

  submit(): Influencer|void {
    if (this.influForm.invalid) return alert('Handle must start with @')
    this.onSubmit.emit(this.influForm.value);
  }
}
