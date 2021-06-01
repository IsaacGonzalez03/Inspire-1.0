import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _drawImage() {
  let img = ProxyState.images
  document.body.style.backgroundImage = `url('${img}')`
}

export class ImagesController {
  constructor() {
    ProxyState.on('images', _drawImage)
    this.getImage()
  }
  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.log(error)
    }
  }
}