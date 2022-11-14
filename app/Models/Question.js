export class Question {
  constructor(data) {
    this.category = data.category;
    this.type = data.type;
    this.difficulty = data.difficulty;
    this.correct_answer = data.correct_answer;
    this.incorrect_answers = data.incorrect_answers;
    this.question = data.question;
    this.choices = [...this.incorrect_answers, this.correct_answer];
    this.choices.sort(() => Math.random() - 0.5);
    this.choices.sort(() => Math.random() - 0.5);
    this.choices.sort(() => Math.random() - 0.5);
    this.choices.sort(() => Math.random() - 0.5);
    this.choices.sort(() => Math.random() - 0.5);
  }
  get Template() {
    return `
    <section class="row m-2 justify-content-center">
    <div class="col-5 card">
      <section class="row">
          <div class="col-12">${this.question}</div>
          <div class="col-md-6 col-4 btn btn-primary" >${this.choices[3]}</div>
          <div class="col-md-6 col-4 btn btn-danger" >${this.choices[0]}</div>
          <div class="col-md-6 col-4 btn btn-success" >${this.choices[1]}</div>
          <div class="col-md-6 col-4 btn btn-warning" >${this.choices[2]}</div>
          </section>
          </div>
        </section>
    `;
  }
  // get ActiveTemplate() {
  //   return `
  //   <section class="row m-2 justify-content-center">
  //   <div class="col-5 card">
  //     <section class="row">
  //         <div class="col-12">${this.question}</div>
  //         <div class="col-md-6 col-4 btn btn-primary" >${this.ComputeChoices}</div>
  //         <div class="col-md-6 col-4 btn btn-danger" >${this.ComputeChoices}</div>
  //         <div class="col-md-6 col-4 btn btn-success" >${this.ComputeChoices}</div>
  //         <div class="col-md-6 col-4 btn btn-warning" >${this.ComputeChoices}</div>
  //         </section>
  //         </div>
  //       </section>
  //   `;
  // }
}
