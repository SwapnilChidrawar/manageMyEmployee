import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showProgressSpinner: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.showProgressSpinner = false;
  }

  loginUser() {
    this.showProgressSpinner = true;
    this.navigateToDashboard();
  }

  navigateToDashboard() {
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 3000);
  }

  cancelLogin() {
    this.showProgressSpinner = false;
  }
}
