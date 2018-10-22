import { IQuiz } from "./types";

function makeResultString(quiz: IQuiz, answers: number[]): string {
  let resultString = "";

  for (let i = 0; i < quiz.questions.length; i++) {
    if (i === 5) {
      resultString += " ";
    }

    if (quiz.questions[i].correctAnswer === answers[i]) {
      resultString += "🔵";
    } else {
      resultString += "🔴";
    }
  }

  return resultString;
}

export default makeResultString;
