import { Component, OnInit, Output, EventEmitter } from '@angular/core';

class Phone {
  constructor(public name: string, public price: number, public company: string) {}
}

@Component({
  selector: 'app-set-table-form',
  templateUrl: './set-table-form.component.html',
  styleUrls: ['./set-table-form.component.css']
})
export class SetTableFormComponent implements OnInit {
  @Output() setTable = new EventEmitter<Phone[]>();

  companies = ['Apple', 'Samsung', 'Xiaomi'];
  phone =  new Phone('', 0, 'Apple');

  phones = [];


  constructor() { }

  ngOnInit() {
  }

  addPhone() {
    this.phones.push(new Phone(this.phone.name, this.phone.price, this.phone.company));
    console.log(this.phones);
    this.setTable.emit(this.phones);
  }

}
