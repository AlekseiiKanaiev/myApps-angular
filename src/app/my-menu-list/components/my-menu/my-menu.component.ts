import { GetUserService } from './../../_services/getUser.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth-firebase/_services/auth.service';
import { Subscription, zip } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})
export class MyMenuComponent implements OnInit {
  isLoaded = false;
  user = null;
  adminDishes = [];
  defaultImg = 'assets/img/calculator.png';
  userSubs: Subscription;
  meals = [];
  modalRef: BsModalRef;
  nameOfMenu = '';
  repeats = [];
  position = 0;
  search = [];
  type = [];

  constructor(private getUserServ: GetUserService, private authServ: AuthService, private modalService: BsModalService) { }

  ngOnInit() {
    console.log(localStorage.getItem('user'))
    zip(this.authServ.userData, this.getUserServ.getUsers()).subscribe(val => {
      console.log(val)
      if (val[0] && val[1]) {
        const user = val[1].find(item => item.email === val[0].email);
        if (user) {
          console.log(user);
          this.user = user;
        }
        this.isLoaded = true;
      }
    });

    this.getUserServ.obsAdminDishes.subscribe(dishes => {
      console.log(dishes);
      this.adminDishes = dishes;
    });
    if(!this.adminDishes || !this.adminDishes.length) {
      this.getUserServ.getAminDishes();
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'add-meal-modal' }));
  }

  getName = name => {
    // console.log(repeats);
    const index = this.repeats.findIndex(item => item.title == name);
    // console.log(index)
    if(index !== -1){
        const newName = `${name}-${this.repeats[index].repeats}`;
        const changeRep = [...this.repeats];
        changeRep.splice(index, 1, {title: name, repeats: this.repeats[index].repeats + 1});
        this.repeats = changeRep;
        return newName;
    }
    this.repeats = [...this.repeats, {title: name, repeats: 1}]
    return name;
}

  addMeal() {
    this.meals = [...this.meals, { title : this.getName(this.nameOfMenu), position: this.position}];
    this.position += 1;
    this.modalRef.hide();
    this.nameOfMenu = '';
    this.search = [...this.search, ''];
    this.type = [...this.type, ''];
  }
}
