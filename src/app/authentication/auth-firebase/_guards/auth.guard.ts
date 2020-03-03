import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authServ: AuthService, private router: Router, private afAuth: AngularFireAuth) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.authServ.isLoggedIn());
    if (this.authServ.isLoggedIn()) {
      if (state.url === '/authentication/login' || state.url === '/authentication/register') {
        this.router.navigate(['authentication/user']);
      }
      return true;
    } else {
      if (state.url === '/authentication/login' || state.url.startsWith('/authentication/register')) {
        return true;
      }
      this.router.navigate(['authentication/login']);
    }
  }
}

