import { musicApi } from "./AxiosService.js"

class VibesService {
    async getVibes() {
        const res = await musicApi.get('api/vibes')
        console.log(res.data, 'vibes res')
    }

}

export const vibesService = new VibesService()