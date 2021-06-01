import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";

function _drawWeather() {
  let weather = ProxyState.weathers
  document.getElementById('weather').innerHTML = weather.Template
}

export class WeathersController {
  constructor() {
    this.getWeather()
    ProxyState.on('weathers', _drawWeather)
  }
  async getWeather() {
    try {
      // console.log('get weather')
      await weathersService.getWeather()
    } catch (error) {
      console.error(error)
    }
  }
}