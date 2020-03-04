import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth-firebase/_services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: firebase.User;

  constructor(private authServ: AuthService) { }

  ngOnInit() {
    this.authServ.userData.subscribe(
      data => {
        if (data) {
          // console.log(data);
          this.user = data;
        }
      }
    );
  }

  logOut() {
    this.authServ.logOut();
  }

}
