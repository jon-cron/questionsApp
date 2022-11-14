import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class QuestionsServices {
  async getQuestions() {
    const question = await axios.get(
      "https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple"
    );
    appState.questions = question.data.results.map(
      (qData) => new Question(qData)
    );
  }
  setActive() {
    debugger;
    let activeQuestion = Math.floor(Math.random * appState.questions.length);
    appState.activeQuestion = activeQuestion;
  }
}

export const questionsServices = new QuestionsServices();
