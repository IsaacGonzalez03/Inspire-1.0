export class Weather {
  constructor({ name, main }) {
    this.name = name
    this.kelvin = main.temp
    this.fahrenheit = Math.floor(((this.kelvin - 273.15) * 1.8) + 32)
  }
  get Template() {
    return `
   <div>
        <h5>${this.name} ${this.fahrenheit}°</h5>
    </div>
    `
  }
}