import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  private pattern = /[\w.+-]+@[\w.-]+\.[\D]{2,4}/;

  constructor(private authServ: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
      email: ['', [Validators.required, Validators.pattern(this.pattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: this.userPasswordConfirmValidator('password', 'confirmPassword')
    });
  }

  private userPasswordConfirmValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const pass = formGroup.controls[password];
      const confPassword = formGroup.controls[confirmPassword];
      if (pass.value !== confPassword.value) {
        confPassword.setErrors({match: true});
      }
    };
  }

  get f() {
    return this.registerForm.controls;
  }

  register(value: {name: string, email: string, password: string}) {
    this.submitted = true;
    if (!this.registerForm.invalid) {
      this.authServ.doRegister(value);
    }
  }
}
