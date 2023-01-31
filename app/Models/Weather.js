export class Weather {
    constructor(data) {
        this.name = data.name
        this.description = data.weather[0].description
        this.humidity = data.main.humidity
        this.fahrenheit = ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)
        this.celsius = (data.main.temp - 273.15).toFixed(2)
        this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        this.isFahrenheit = true
        this.fahrenheitFeelsLike = data.main.feels_like
        this.fahrenheitFeelsLike = (((data.main.feels_like - 273.15) * 1.8) + 32).toFixed()
    }

    get WeatherTemplate() {
        return `    
        <div class="weather-header d-flex justify-content-around press-start text-white">
        
            <p class="m-0 p-0">${this.name}</p>
            <p class="m-0">||</p>
            <p class="m-0 p-0">${this.description}</p>
       </div>
        <div class="weather-body d-flex press-start justify-content-between align-items-center p-1">
            <div class=" d-flex">
                <img src="${this.icon}" alt="">
                <p class="m-0 mt-3 fs-temp">${this.isFahrenheit ? this.fahrenheit : this.celsius}°F</p>
            </div>
            <div class="">
                <p class="m-0"> <span>Feels Like</span>: ${this.fahrenheitFeelsLike}°F</p>
                <p class="m-0"> <span>Humidity</span>: ${this.humidity}</p>
            </div>
        </div>
        `
    }
}