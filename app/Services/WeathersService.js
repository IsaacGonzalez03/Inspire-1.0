import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherApi } from "./AxiosService.js";

class WeathersService {
  async getWeather() {
    let res = await weatherApi.get()
    // console.log(res.data)
    ProxyState.weathers = new Weather(res.data)
    // console.log(ProxyState.weathers)
  }
}

export const weathersService = new WeathersService();