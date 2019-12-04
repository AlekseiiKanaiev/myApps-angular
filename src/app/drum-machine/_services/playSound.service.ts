import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable()
export class PlaySoundService {
    private soundVolume = 0.3;
    constructor(private stateServ: StateService) {
        this.stateServ.obsVolume.subscribe(
            (value) => this.soundVolume = value
        );
    }

    playSound(url: string) {
        // console.log(url);
        const sound = new Audio();
        sound.src = url;
        sound.load();
        sound.volume = this.soundVolume;
        sound.currentTime = 0;
        sound.play();
    }
}
