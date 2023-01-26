import { appState } from "../AppState.js"
import { vibesService } from "../Services/VibesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawVibesList() {
    let vibes = appState.vibes
    let template = ''
    vibes.forEach(v => template += v.VibesTemplate)
    setHTML('vibes', template)
}

function _drawActive() {
    let vibe = appState.activeVibe
    document.body.style.backgroundImage = `url(${vibe.imgUrl})`
    // TODO add the player template to the model and draw here as well
}

export class VibesController {
    constructor() {
        console.log('hello from the vibes controller')
        this.getVibes()
        appState.on('vibes', _drawVibesList)
        appState.on('activeVibe', _drawActive)
    }

    async getVibes() {
        try {
            await vibesService.getVibes()
        } catch (error) {
            Pop.error(error)
        }
    }

    async getActive(id) {
        // console.log(id);
        try {
            await vibesService.getActive(id)
        } catch (error) {
            Pop.error(error)
        }
    }


}