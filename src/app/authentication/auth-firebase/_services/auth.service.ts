import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alertService.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;
  user: firebase.User;
  verify = new BehaviorSubject<boolean>(true);
  private url = environment.API;

  constructor(public afAuth: AngularFireAuth,
              private router: Router,
              private ngz: NgZone,
              private alertServ: AlertService) {
                this.userData = afAuth.authState;
                this.userData.subscribe(
                  (user: firebase.User) => {
                    if (user) {
                      // console.log(user);
                      this.setUserToLocalstorage(user);
                    } else {
                      localStorage.setItem('user', 'null');
                    }
                  }
                );
  }

  isLoggedIn(): boolean {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  isVerified() {
    if (this.isLoggedIn()) {
      // console.log(JSON.parse(localStorage.getItem('user')).emailVerified);
      if (JSON.parse(localStorage.getItem('user')).emailVerified) {
        return true;
      } else {
        this.alertServ.error('You must verify your email');
        this.logOut();
        return false;
      }
    }
  }

  private setUserToLocalstorage(user: firebase.User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  private navigate(url: string) {
    // console.log(1);
    this.ngz.run(() => this.router.navigate([`authentication/${url}`]));
  }

  private socialLogin(provider: firebase.auth.GoogleAuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then(res => {
      this.setUserToLocalstorage(res.user);
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

  async doEmailAndPasswordLogin(value: {email: string, password: string, verified: boolean}) {
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password);
      // console.log(res);
      this.setUserToLocalstorage(res.user);
      if (value.verified) {
        this.verify.next(true);
        this.navigate('user');
      } else {
        this.verify.next(false);
        this.alertServ.success('You have been successfully logged', true);
        this.navigate('user');
      }
    } catch (err) {
      return this.alertServ.error(err.message);
    }
  }

  doRegister(value: {name: string, email: string, password: string, verified: boolean}) {
    this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
    .then(res => {
      res.user.updateProfile({displayName: value.name});
      if (value.verified) {
        this.verify.next(true);
        this.setUserToLocalstorage(res.user);
        this.sendVerificationEmail();
      } else {
        this.verify.next(false);
        this.setUserToLocalstorage(res.user);
        this.alertServ.success('You have been successfully registred', true);
        this.navigate('user');
      }
    })
    .catch(err => this.alertServ.error(err.message));
  }

  sendVerificationEmail() {
    const actionSettings = {url: `${this.url}/authentication/register/email-verification`};
    this.user.sendEmailVerification(actionSettings)
    .then(result => {
      this.navigate('register/email-verification');
    })
    .catch(err => this.alertServ.error(err.messsage));
  }

  logOut() {
    this.afAuth.auth.signOut()
    .then(res => {
      localStorage.removeItem('user');
      this.navigate('login');
    })
    .catch(err => this.alertServ.error(err.message));
  }

  async forgotPassword(email: string) {
    const actions = {url: `${this.url}/authentication/login`};
    try {
      const res = await this.afAuth.auth.sendPasswordResetEmail(email, actions);
      return this.alertServ.success('New password sent. Check your email box.');
    } catch (err) {
      return this.alertServ.error(err.message);
    }
  }

  changePassword(value: {oldPassword: string, newPassword: string}) {
    if (this.user) {
      const credentials = firebase.auth.EmailAuthProvider.credential(this.user.email, value.oldPassword);
      this.user.reauthenticateWithCredential(credentials)
      .then(res => {
        this.user.updatePassword(value.newPassword);
        this.alertServ.success('Password has been changed successfully', true);
        this.navigate('user');
      })
      .catch(err => this.alertServ.error(err.message));
    }
  }
}
