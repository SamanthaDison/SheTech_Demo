import { appState } from "../AppState.js"
import { Vibe } from "../Models/Vibe.js"
import { musicApi } from "./AxiosService.js"

class VibesService {
    async getVibes() {
        const res = await musicApi.get('api/vibes')
        // console.log(res.data, 'vibes res')
        appState.vibes = res.data.map(v => new Vibe(v))
        console.log('vibes', appState.vibes)
    }

}

export const vibesService = new VibesService()