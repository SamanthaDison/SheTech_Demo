import { DateController } from "./Controllers/DateController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { VibesController } from "./Controllers/VibesController.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController();

  vibesController = new VibesController();

  dateController = new DateController();
}

window["app"] = new App();
