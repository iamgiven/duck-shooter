

import { hitDuck } from "audio-game.js";
import { playAudio } from "audio-game.js"

export const shootButton = document.getElementById("shoot-button");
shootButton.addEventListener("click", shootFunction);



function shootFunction () {
    
    hitDuck();
    playAudio();

}

    




