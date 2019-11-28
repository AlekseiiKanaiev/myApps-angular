
/**The alert service enables any component in the application
 * to display alert messages at the top of the page via the
 * alert component.
 * It has methods for displaying success and error messages,
 * and a getMessage() method that returns an Observable
 * that is used by the alert component to subscribe
 * to notifications for whenever a message should be displayed.
 */

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChanges = false;

    constructor(private router: Router) {
        // clear alert message when route changes
        router.events.subscribe(
            event => {
                if (event instanceof NavigationStart) {
                    (this.keepAfterNavigationChanges) ?
                        // only keep for a single location change
                        this.keepAfterNavigationChanges = false :
                        // clear alert
                        this.subject.next();
                }
            }
        );
    }

    success(message: string, keepAfterNavigationChanges = false): void {
        this.keepAfterNavigationChanges = keepAfterNavigationChanges;
        this.subject.next({type: 'success', text: message});
    }

    warning(message: string, keepAfterNavigationChanges = false): void {
        this.keepAfterNavigationChanges = keepAfterNavigationChanges;
        this.subject.next({type: 'warning', text: message});
    }

    error(message: string, keepAfterNavigationChanges = false): void {
        this.keepAfterNavigationChanges = keepAfterNavigationChanges;
        this.subject.next({type: 'error', text: message});
    }

    clearAlert() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
