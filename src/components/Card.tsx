import React, { ReactElement } from "react";
import { AnswerButton, ButtonWrapper } from "../styles/style";
import { IAnswersValue } from "../utils/helper";

interface IQuestionCard {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: boolean;
  correct_answer: string;
  answersValue: IAnswersValue;
}

export default function Card({
  question,
  answers,
  callback,
  userAnswer,
  answersValue,
}: IQuestionCard): ReactElement {
  return (
    <div>
      <p
        dangerouslySetInnerHTML={{ __html: question }}
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      />
      <ButtonWrapper>
        {answers.map((answer: string) => (
          <AnswerButton
            correct={answersValue?.correct === answer}
            click={answersValue?.answer === answer}
            value={answer}
            key={answer}
            onClick={callback}
            disabled={userAnswer}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </AnswerButton>
        ))}
      </ButtonWrapper>
    </div>
  );
}
