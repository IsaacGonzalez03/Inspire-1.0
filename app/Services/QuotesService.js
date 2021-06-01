import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quoteApi } from "./AxiosService.js";

class QuotesService {
  async getQuote() {
    let res = await quoteApi.get()
    ProxyState.quotes = new Quote(res.data)
  }
}
export const quotesService = new QuotesService()