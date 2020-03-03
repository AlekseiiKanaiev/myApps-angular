import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { AlertService } from 'src/app/_services/alertService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  private pattern = /[\w.+-]+@[\w.-]+\.[\D]{2,4}/;

  constructor(private authServ: AuthService, private fb: FormBuilder, private alertServ: AlertService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.pattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login(value: {email: string, password: string}) {
    console.log(1);
    this.submitted = true;
    if (!this.loginForm.invalid) {
      this.authServ.doEmailAndPasswordLogin(value);
    }
  }

  googleLogin() {
    this.authServ.doGoogleLogin();
  }

  resetPassword() {
    const email = prompt('Enter your email', this.f.email.value || '');
    if (email && email.match(this.pattern)) {
      this.authServ.forgotPassword(email);
    }
  }

}
