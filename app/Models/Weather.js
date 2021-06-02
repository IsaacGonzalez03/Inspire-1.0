export class Weather {
  constructor({ name, main }) {
    this.name = name
    this.kelvin = main.temp
    this.fahrenheit = Math.floor(((this.kelvin - 273.15) * 1.8) + 32)
    this.celcius = Math.floor(this.kelvin - 273.15)
  }
  get Template() {
    return `
   <div>
        <h5>${this.name} ${this.fahrenheit}°F</h5>
        <h5 class="hide">${this.name} ${this.celcius}°C</h5>
    </div>
    `
  }
}