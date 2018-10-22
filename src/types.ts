export interface IQuestion {
  text: string;
  choices: string[];
  correctAnswer: number;
}

export interface IQuiz {
  questions: IQuestion[];
  scorePerQuestion: number;
}
