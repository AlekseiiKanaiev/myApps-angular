import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  changePasswordForm: FormGroup;
  submitted = false;

  constructor(private authServ: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', [Validators.required]]
    },
    {
      validator: this.userConfirmPasswordValidator('newPassword', 'confirmNewPassword')
    });
  }

  private userConfirmPasswordValidator(pass1: string, pass2: string) {
    return(formGroup: FormGroup) => {
      const pass = formGroup.controls[pass1];
      const confPass = formGroup.controls[pass2];
      if (pass.value !== confPass.value) {
        confPass.setErrors({match: true});
      }
    };
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  changePass(value: {oldPassword: string, newPassword: string}) {
    console.log(1);
    this.submitted = true;
    if (!this.changePasswordForm.invalid) {
      this.authServ.changePassword(value);
    }
  }
}
