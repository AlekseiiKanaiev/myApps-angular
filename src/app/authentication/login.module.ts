import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { AuthFirebaseModule } from './auth-firebase/auth-firebase.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-firebase/_guards/auth.guard';

const loginRoutes: Routes = [
  {path: 'user', component: UserComponent, canActivate: [AuthGuard], pathMatch: 'full'}
];


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(loginRoutes),
    AuthFirebaseModule,
  ],
  exports: [RouterModule]
})
export class LoginModule { }
