/**The alert component passes alert messages to the template
 * whenever a message is received from the alert service.
 * It does this by subscribing to the alert service's
 * getMessage() method which returns an Observable.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../_services/alertService.service';

@Component({
    selector: 'app-auth-alert',
    templateUrl: './alert.component.html',
    styles: [`#alert{
        width: fit-content;
        text-align: center;
        margin: auto;
    }`]
})
export class AlertComponent implements OnInit, OnDestroy {
    private subs: Subscription;
    message: any;

    constructor(private alertService: AlertService) {}

    ngOnInit() {
        this.subs = this.alertService.getMessage().subscribe(
            message => this.message = message
        );
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
