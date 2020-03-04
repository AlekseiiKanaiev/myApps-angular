import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { AuthFirebaseModule } from './auth-firebase/auth-firebase.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-firebase/_guards/auth.guard';

const loginRoutes: Routes = [
  {path: 'authentication', redirectTo: 'authentication/user', pathMatch: 'full'},
  {path: 'authentication/user', component: UserComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(loginRoutes),
    AuthFirebaseModule,
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AuthenticationModule { }
