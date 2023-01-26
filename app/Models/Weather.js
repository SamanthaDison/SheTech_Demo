export class Weather {
    constructor(data) {
        this.fahrenheit = ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(2)
        this.celsius = (data.main.temp - 273.15).toFixed(2)
        this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }
}