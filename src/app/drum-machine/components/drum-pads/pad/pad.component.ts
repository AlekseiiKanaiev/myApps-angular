import { Component, OnInit, Input, HostListener } from '@angular/core';
import { BankSet } from '../../../_models/dataSet.model';
import { DisplayService } from '../../../_services/display.service';
import { PlaySoundService } from '../../../_services/playSound.service';
import { StateService } from '../../../_services/state.service';

@Component({
  selector: 'app-drum-machine-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  @Input() item: BankSet;

  isPower = true;
  isClicked = false;

  constructor(private displayServ: DisplayService,
              private soundServ: PlaySoundService,
              private stateServ: StateService) { }

  ngOnInit() {
    this.stateServ.obsPower.subscribe(
      (value) => this.isPower = value
    );
  }

  @HostListener('document:keypress', ['$event'])
  onPress(e) {
    if (e.code.slice(-1) === this.item.keyTrigger) {
      this.action();
    }
  }

  onClick() {
    // console.log(event);
    this.action();
  }

  action() {
    // console.log(this.item);
    if (this.isPower) {
      this.displayServ.changeMessage(this.item.id);
      this.soundServ.playSound(this.item.url);
    }
    this.isClicked = true;
    setTimeout(() => this.isClicked = false, 400);
  }
}
