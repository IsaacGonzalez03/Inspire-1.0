import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js"

function _drawQuote() {
  // console.log('draw quote function')
  let quote = ProxyState.quotes
  document.getElementById('quote').innerHTML = quote.Template
}

export class QuotesController {
  constructor() {
    ProxyState.on('quotes', _drawQuote)
    this.getQuote()
  }
  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.log(error)
    }
  }
}


