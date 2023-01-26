import { weatherService } from "../Services/WeatherService.js"
import { Pop } from "../Utils/Pop.js"

export class WeatherController {
    constructor() {
        console.log('hello from weather controller')
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
        }
    }
}