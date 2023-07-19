import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent {
  constructor (private router: Router) {}

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('authorization')
    this.router.navigate(['/'])
  }
};
