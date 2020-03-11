import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-directive',
  templateUrl: './table-directive.component.html',
  styleUrls: ['./table-directive.component.css']
})
export class TableDirectiveComponent implements OnInit {
  phones = [
    // {name: 'iPhone', price: 1000},
    // {name: 'Samsung', price: 900},
    // {name: 'Xiaomi', price: 400}
  ];

  isShow = true;
  oddRow = 'blue';
  evenRow = 'yellow';

  tableData = {phones: this.phones, oddRowColor: this.oddRow, evenRowColor: this.evenRow};

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.isShow = !this.isShow;
    console.log(this.oddRow, this.evenRow);
    this.tableData = {phones: this.phones, oddRowColor: this.oddRow, evenRowColor: this.evenRow};
  }

  setTable(phones) {
    this.phones = phones;
    this.tableData = {phones: this.phones, oddRowColor: this.oddRow, evenRowColor: this.evenRow};
  }

}
