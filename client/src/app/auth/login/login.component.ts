import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {  }

  login() {
    console.log('login', { username: this.username, password: this.password });
    this.authService.auth(this.username, this.password).subscribe(result => {
      if (result == true) {
        console.log('auth', result);
        this.router.navigateByUrl('');
      } else {
        console.log('auth', result);
      }
    });
  }

}
