import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DrumMachineComponent } from './components/drum-machine.component';
import { ControlsComponent } from './components/controls/controls.component';
import { DisplayComponent } from './components/controls/display/display.component';
import { BankSwitchComponent } from './components/controls/bank-switch/bank-switch.component';
import { VolumeBarComponent } from './components/controls/volume-bar/volume-bar.component';
import { PowerSwitchComponent } from './components/controls/power-switch/power-switch.component';
import { DrumPadsComponent } from './components/drum-pads/drum-pads.component';
import { PadComponent } from './components/drum-pads/pad/pad.component';

import { StateService } from './_services/state.service';
import { SetDataService } from './_services/setData.service';
import { DisplayService } from './_services/display.service';
import { PlaySoundService } from './_services/playSound.service';

const drumMachineRoutes: Routes = [
    {path: 'drum-machine', component: DrumMachineComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(drumMachineRoutes)
    ],

    declarations: [
    DrumMachineComponent,
    ControlsComponent,
    DisplayComponent,
    BankSwitchComponent,
    VolumeBarComponent,
    PowerSwitchComponent,
    DrumPadsComponent,
    PadComponent
    ],

    exports: [
        RouterModule
    ],

    providers: [
        StateService,
        SetDataService,
        DisplayService,
        PlaySoundService
    ]
})
export class DrumMachineModule {}
