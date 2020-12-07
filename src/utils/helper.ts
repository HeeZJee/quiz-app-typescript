export enum DIFFICULTY {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type TAnswer = "correct" | "incorrect" | undefined;

export enum ANSWER {
  CORRECT = "correct",
  INCORRECT = "incorrect",
}

export interface IQuestionInitial {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IQuestion extends IQuestionInitial {
  answers: string[];
}

export const shuffleArray = (array: Array<any>) =>
  [...array].sort(() => Math.random() - 0.5);
