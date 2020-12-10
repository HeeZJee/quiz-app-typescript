export enum DIFFICULTY {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export interface IQuestionInitial {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IAnswersValue {
  answer: string;
  correct: string;
}

export interface IQuestion extends IQuestionInitial {
  answers: string[];
}

export const shuffleArray = (array: Array<any>) =>
  [...array].sort(() => Math.random() - 0.5);
