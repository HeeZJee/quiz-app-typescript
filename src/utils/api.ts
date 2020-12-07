import {
  DIFFICULTY,
  IQuestion,
  IQuestionInitial,
  shuffleArray,
} from "./helper";

export const fetchQuestions = async (
  amount: number,
  difficulty: DIFFICULTY.EASY
) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const { results } = await (await fetch(url)).json();

  return results.map(
    (question: IQuestionInitial): IQuestion => {
      const { incorrect_answers, correct_answer } = question;
      return {
        ...question,
        answers: shuffleArray([correct_answer, ...incorrect_answers]),
      };
    }
  );
};
