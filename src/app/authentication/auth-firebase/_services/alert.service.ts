import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert = new Subject<{type: string, message: string}>();
  private keepAfterNav = false;

  constructor(private router: Router) {
    router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.keepAfterNav ? this.keepAfterNav = false : this.alert.next();
        }
      }
    );
  }

  alertSuccess(msg: string, kan = false) {
    this.keepAfterNav = kan;
    this.alert.next({type: 'success', message: msg});
  }

  alertError(msg: string, kan = false) {
    this.keepAfterNav = kan;
    this.alert.next({type: 'error', message: msg});
  }

  getAlert() {
    return this.alert.asObservable();
  }
}
