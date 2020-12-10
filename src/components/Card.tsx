import React, { ReactElement } from 'react'
import { AnswerButton, ButtonWrapper } from '../styles/style'


interface IQuestionCard {
    question: string
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: boolean;
    correct_answer: string;
    answerValue: string;
    correct: string;
}

export default function Card({ question, answers, callback, userAnswer, correct, answerValue }: IQuestionCard): ReactElement {


    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <ButtonWrapper>
                {answers.map((answer: string) => (
                    <AnswerButton correct={correct === answer} click={answerValue === answer} value={answer} key={answer} onClick={callback} disabled={userAnswer} >
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </AnswerButton>
                ))}
            </ButtonWrapper>
        </div >
    )
}
