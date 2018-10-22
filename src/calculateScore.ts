import { IQuiz } from "./types";

function calculateScore(quiz: IQuiz, answers: number[]): number {
  let score = 0;

  for (let i = 0; i < quiz.questions.length; i++) {
    if (quiz.questions[i].correctAnswer === answers[i]) {
      score = score + quiz.scorePerQuestion;
    }
  }

  return score;
}

export default calculateScore;
