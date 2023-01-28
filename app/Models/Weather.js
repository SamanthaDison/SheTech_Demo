export class Weather {
    constructor(data) {
        this.name = data.name
        this.fahrenheit = ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(2)
        this.celsius = (data.main.temp - 273.15).toFixed(2)
        this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        this.isFahrenheit = true
    }

    get WeatherTemplate() {
        return `    
        <div class="bg-warning d-flex">
            <img src="${this.icon}" alt="">
            <p class="mt-3">${this.isFahrenheit ? this.fahrenheit : this.celsius} °F</p>
        </div>
        <div>
            <p>${this.name}</p>
        </div>
        `
    }
}