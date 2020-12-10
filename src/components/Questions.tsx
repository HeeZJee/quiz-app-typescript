import React, { ReactElement } from "react";
import { IAnswersValue, IQuestion } from "../utils/helper";
import Card from "./Card";

interface Props {
  questionData: IQuestion;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: boolean;
  answersValue: IAnswersValue;
}

export default function Questions({
  questionData,
  callback,
  userAnswer,
  answersValue,
}: Props): ReactElement {
  const { question, answers, correct_answer } = questionData;
  return (
    <Card
      userAnswer={userAnswer}
      question={question}
      answers={answers}
      callback={callback}
      correct_answer={correct_answer}
      answersValue={answersValue}
    />
  );
}
