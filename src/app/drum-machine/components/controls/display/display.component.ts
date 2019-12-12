import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../../../_services/display.service';

@Component({
  selector: 'app-drum-machine-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  message = '';
  constructor(private displayServ: DisplayService) { }

  ngOnInit() {
    this.displayServ.obsMessage.subscribe(
      (message) => this.message = message
    );
  }

}
