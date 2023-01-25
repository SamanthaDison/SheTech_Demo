import { vibesService } from "../Services/VibesService.js"
import { Pop } from "../Utils/Pop.js"

export class VibesController {
    constructor() {
        console.log('hello from the vibes controller')
        this.getVibes()
    }

    async getVibes() {
        try {
            await vibesService.getVibes()
        } catch (error) {
            Pop.error(error)
        }
    }
}