import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServ: AuthService, private router: Router, private afAuth: AngularFireAuth) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authServ.isLoggedIn()) {
      if (state.url === '/login' || state.url === '/register') {
        this.router.navigate(['user']);
      }
      return true;
    } else {
      if (state.url === '/login' || state.url.startsWith('/register')) {
        return true;
      }
      this.router.navigate(['login']);
    }
  }
}

