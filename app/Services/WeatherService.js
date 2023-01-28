import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await sandboxApi.get('api/weather')
        // console.log(res);
        appState.weather = new Weather(res.data)
        console.log('weather', appState.weather);
    }

}

export const weatherService = new WeatherService()