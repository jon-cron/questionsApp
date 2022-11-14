import { QuestionsController } from "./Controllers/questionsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  questionsController = new QuestionsController();
}

window["app"] = new App();
