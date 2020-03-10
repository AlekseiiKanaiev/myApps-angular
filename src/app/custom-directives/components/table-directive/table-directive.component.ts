import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-directive',
  templateUrl: './table-directive.component.html',
  styleUrls: ['./table-directive.component.css']
})
export class TableDirectiveComponent implements OnInit {
  phones = [
    {name: 'iPhone', price: 1000},
    {name: 'Samsung', price: 900},
    {name: 'Xiaomi', pricce: 400}
  ];

  isShow = false;
  oddRow = '';
  evenRow = '';

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.isShow = true;
    console.log(this.oddRow, this.evenRow);
  }

}
