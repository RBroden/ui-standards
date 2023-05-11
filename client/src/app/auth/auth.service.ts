import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authorized: boolean = false;

  constructor(private router: Router) { }

  auth(un: string, pw: string): Observable<boolean> {
    this.authorized = true;
    return of(true);
  }

  isAuthorized(): boolean {
    console.log('auth - up in here');
    if(!this.authorized) {
      console.log('not authorized');
      this.router.navigateByUrl('login');
    }
    return this.authorized;
  }
}
