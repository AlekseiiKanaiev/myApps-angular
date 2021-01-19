import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Location } from '@angular/common';

@Injectable()
export class AuthGuard implements CanActivate {
  verify = false;
  constructor(private authServ: AuthService, private router: Router, private afAuth: AngularFireAuth, private location: Location) {
    authServ.verify.subscribe(
      value => this.verify = value
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const checkMethod = (this.verify) ? this.authServ.isVerified.bind(this.authServ) : this.authServ.isLoggedIn;
      // console.log(checkMethod);
      if (checkMethod()) {
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
