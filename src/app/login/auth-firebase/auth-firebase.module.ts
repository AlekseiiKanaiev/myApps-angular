import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';

const authRoutes: Routes = [
  {path: 'user/login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'user/register', component: RegisterComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  {path: 'user/change-pass', component: ChangePassComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [AlertComponent, ChangePassComponent, LoginComponent, RegisterComponent, EmailVerificationComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(authRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-apps-angular'),
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class AuthFirebaseModule { }
