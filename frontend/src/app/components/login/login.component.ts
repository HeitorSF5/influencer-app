import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';
import Login from 'src/interfaces/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginEvent = new EventEmitter<Login>();
  loginForm!: FormGroup;
  username!: string;
  password!: string;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(this.username),
      password: new FormControl(this.password)
    })
  }

  login(creds: Login) {
    this.loginService.login(creds).subscribe((response) => {
      if (response instanceof Error) return alert('Invalid credentials!')
      // to do: Actually catch this alert somehow
      else {
        localStorage.setItem('token', response.accessToken)
        localStorage.setItem('authorization', response.admin.toString())
        this.router.navigate(['/list'])
      }
    })
  }

  submit(): void {
    if (this.loginForm.invalid) return
    this.loginEvent.emit(this.loginForm.value)
    this.login(this.loginForm.value)
  }
}
