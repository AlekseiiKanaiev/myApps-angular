import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyMenuComponent } from './components/my-menu/my-menu.component';
import { GetUserService } from './_services/getUser.service';
import { MyMenuService } from './_services/my-menu.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const myMenuRoutes: Routes = [
  {path: 'my-menu', component: MyMenuComponent}
];

@NgModule({
  declarations: [MyMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(myMenuRoutes),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    MatInputModule,
  ],
  providers: [GetUserService, MyMenuService]
})
export class MyMenuListModule { }
