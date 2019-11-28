import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../_services/state.service';

@Component({
  selector: 'app-drum-machine-power-switch',
  templateUrl: './power-switch.component.html',
  styleUrls: ['./power-switch.component.css']
})
export class PowerSwitchComponent implements OnInit {
  private floatVar = 'left';
  private isPower = true;

  constructor(private stateServ: StateService) { }

  ngOnInit() {
    this.stateServ.obsPower.subscribe(
      (value) => {
        this.isPower = value;
        this.floatVar = (this.isPower) ? 'left' : 'right';
      }
    );
  }
  onClick() {
    this.stateServ.switchPower();
  }
}
