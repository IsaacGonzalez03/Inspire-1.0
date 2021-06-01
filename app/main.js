import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeathersController } from "./Controllers/WeathersController.js";


class App {
  todosController = new TodosController();

  clockController = new ClockController();
  quotesController = new QuotesController();
  imagesController = new ImagesController();

  weathersController = new WeathersController();
}

window["app"] = new App();
