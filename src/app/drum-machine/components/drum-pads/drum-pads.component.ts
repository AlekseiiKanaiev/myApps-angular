import { Component, OnInit } from '@angular/core';
import { SetDataService } from '../../_services/setData.service';
import { BankSet } from '../../_models/dataSet.model';

@Component({
  selector: 'app-drum-machine-drum-pads',
  templateUrl: './drum-pads.component.html',
  styleUrls: ['./drum-pads.component.css']
})
export class DrumPadsComponent implements OnInit {
  private dataSet: BankSet[][];

  constructor(private setDataServ: SetDataService) { }

  ngOnInit() {
    this.setDataServ.obsDataSet.subscribe(
      (data) => {
        const dataSet = [];
        for (let i = 0; i < data.length; i = i + 3) {
          dataSet.push(data.slice(i, i + 3));
        }
        this.dataSet = dataSet;
      }
    );
  }
}
