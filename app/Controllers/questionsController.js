import { appState } from "../AppState.js";
import { questionsServices } from "../Services/questionsService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestions() {
  let questions = appState.questions;
  let template = "";
  questions.forEach((q) => (template += q.Template));
  setHTML("question", template);
}
// function _drawActiveQuestion() {
//   setHTML("question", activeQuestion.ActiveTemplate);
// }

export class QuestionsController {
  constructor() {
    this.getQuestions();
    // appState.on("activeQuestion", _drawActiveQuestion);
    appState.on("questions", _drawQuestions);
  }

  async getQuestions() {
    await questionsServices.getQuestions();
  }
  setActive() {
    debugger;
    questionsServices.setActive();
  }
}
