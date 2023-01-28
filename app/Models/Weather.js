export class Weather {
    constructor(data) {
        this.name = data.name
        this.description = data.weather[0].description
        this.humidity = data.main.humidity
        this.fahrenheit = ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(2)
        this.celsius = (data.main.temp - 273.15).toFixed(2)
        this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        this.isFahrenheit = true
        this.fahrenheitFeelsLike = data.main.feels_like
        this.fahrenheitFeelsLike = (((data.main.feels_like - 273.15) * 1.8) + 32).toFixed()
    }

    get WeatherTemplate() {
        return `    
        <div class="row">
            <p class="m-0">${this.name}</p>
            <p>${this.description}</p>
        </div>
        <div class="row">
            <div class="col-6 d-flex">
                <img src="${this.icon}" alt="">
                <p class="mb-0 mt-3">${this.isFahrenheit ? this.fahrenheit : this.celsius} °F</p>
            </div>
            <div class="col-6">
                <p> <span>Feels Like</span> ${this.fahrenheitFeelsLike} °F</p>
                <p> <span>Humidity</span> ${this.humidity}</p>
            </div>
        </div>
        `
    }
}