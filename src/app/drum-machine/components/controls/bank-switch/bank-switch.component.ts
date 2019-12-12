import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../_services/state.service';
import { SetDataService } from '../../../_services/setData.service';
import { DisplayService } from '../../../_services/display.service';

@Component({
  selector: 'app-drum-machine-bank-switch',
  templateUrl: './bank-switch.component.html',
  styleUrls: ['./bank-switch.component.css', '../power-switch/power-switch.component.css']
})
export class BankSwitchComponent implements OnInit {
  floatVar = 'left';
  private isPower = true;

  constructor(private stateServ: StateService,
              private setDataServ: SetDataService,
              private displayServ: DisplayService) { }

  ngOnInit() {
    this.stateServ.obsPower.subscribe(
      (value) => {
        this.isPower = value;
        // this.floatVar = (this.isPower) ? 'left' : 'right';
      }
    );
  }
  onClick() {
    if (this.isPower) {
      this.setDataServ.switchData();
      if (this.floatVar === 'left') {
        this.floatVar = 'right';
        this.displayServ.changeMessage('Smooth Piano Kit');
      } else {
        this.floatVar = 'left';
        this.displayServ.changeMessage('Heater Kit');
      }
    }
  }
}
