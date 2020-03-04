import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { AlertService } from 'src/app/_services/alertService.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {
  user: firebase.User;
  timer = 60;
  enable = false;
  constructor(private authServ: AuthService, private alertServ: AlertService) { }

  ngOnInit() {
    this.authServ.userData.subscribe(
      user => {
        if (user) {
          // console.log(user);
          this.user = user;
          const interval = setInterval(() => {
            if (this.timer > 0) {
              this.timer--;
            } else {
              this.enable = true;
              clearInterval(interval);
            }
          }, 1000);
          if (user.emailVerified) {
            this.alertServ.success('Your email has been successfully ferified');
          }
        }
      }
    );
  }

  resend() {
    // console.log(2);
    this.authServ.sendVerificationEmail();
  }
}
