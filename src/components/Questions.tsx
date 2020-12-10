import React, { ReactElement } from 'react'
import { IQuestion } from '../utils/helper'
import Card from './Card'

interface Props {
    questionData: IQuestion,
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: boolean,
    correct: string;
    answerValue: string,
}



export default function Questions({ questionData, callback, userAnswer, answerValue, correct }: Props): ReactElement {
    const { question, answers, correct_answer } = questionData
    return (
        <div>
            <Card
                userAnswer={userAnswer}
                question={question}
                answers={answers}
                callback={callback}
                correct_answer={correct_answer}
                answerValue={answerValue}
                correct={correct}
            />
        </div>

    )
}
