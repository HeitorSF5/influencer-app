import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register/register.service';
import Influencer from 'src/interfaces/Influencer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  btnText = "Register"

  constructor(private registerService: RegisterService, private router: Router) {}

  ngOnInit(): void {
    if(!localStorage.getItem('token')) this.router.navigate(['/'])
  } // to do: Proper token and authorization check

  submitHandler(influencer: Influencer): void {
    this.createInflu(influencer);
    // to do: Implement check if createInflu worked
  }

  listNavigate() { this.router.navigate(['/list']) }

  createInflu(influencer: Influencer): void {
    this.registerService.create(influencer).subscribe()
    location.reload()
  }
}
