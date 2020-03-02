import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alertService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;
  user: firebase.User;
  private url = 'http://localhost:4200';

  constructor(public afAuth: AngularFireAuth,
              private router: Router,
              private ngz: NgZone,
              private alertServ: AlertService) {
                this.userData = afAuth.authState;
                this.userData.subscribe(
                  (user: firebase.User) => {
                    if (user) {
                      this.user = user;
                      localStorage.setItem('user', JSON.stringify(this.user));
                    } else {
                      localStorage.setItem('user', 'null');
                    }
                  }
                );
  }

  isLoggedIn() {
    return localStorage.getItem('user') !== null;
  }

  isVerified() {
    if (this.isLoggedIn()) {
      if (JSON.parse(localStorage.getItem('user')).emailVerified) {
        return true;
      } else {
        this.alertServ.error('You must verify your email');
      }
    }
  }

  private navigate(url: string) {
    this.ngz.run(() => this.router.navigate([url]));
  }

  private socialLogin(provider: firebase.auth.GoogleAuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then(res => {
      this.alertServ.success('You have been successfully logged in', true);
      this.navigate('user');
    })
    .catch(err => this.alertServ.error(err.message));
  }

  doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.socialLogin(provider);
  }

  doEmailAndPasswodLogin(value: {email: string, password: string}) {
    this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
    .then(res => {
      this.alertServ.success('You have been successfully logged in', true);
      this.navigate('user');
    })
    .catch(err => this.alertServ.error(err.message));
  }

  doRegister(value: {name: string, email: string, password: string}) {
    return this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
    .then(res => {
      res.user.updateProfile({displayName: value.name});
      const actionSettings = {url: `${this.url}/register/email-verification`};
      res.user.sendEmailVerification(actionSettings)
      .then(res => {
        this.alertServ.success('You have been successfully registred', true);
        this.navigate('/register/email-verification');
      })
      .catch(err => this.alertServ.error(err.messsage));
    })
    .catch(err => this.alertServ.error(err.message));
  }

  logOut() {
    this.afAuth.auth.signOut()
    .then(res => {
      localStorage.removeItem('user');
      this.navigate('login');
    })
    .catch(err => this.alertServ.error(err.message));
  }

  forgotPassword(email: string) {
    const actions = {url: `${this.url}/login`};
    return this.afAuth.auth.sendPasswordResetEmail(email, actions)
    .then(res => this.alertServ.success('New password sent. Check your email box.'))
    .catch(err => this.alertServ.error(err.message));
  }

  changePassword(value: {oldPassword: string, password: string}) {
    if (this.user) {
      const credentials = firebase.auth.EmailAuthProvider.credential(this.user.email, value.oldPassword);
      this.user.reauthenticateWithCredential(credentials)
      .then(res => {
        this.user.updatePassword(value.password);
        this.alertServ.success('Password has been changed successfully', true);
        this.navigate('user');
      })
      .catch(err => this.alertServ.error(err.message));
    }
  }
}
