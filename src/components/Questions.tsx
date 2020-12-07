import React, { ReactElement } from 'react'
import { IQuestion } from '../utils/helper'
import Card from './Card'

interface Props {
    questionData: IQuestion,
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    // QuestionId: number,
    userAnswer: boolean,
}



export default function Questions({ questionData, callback, userAnswer }: Props): ReactElement {
    const { question, answers, correct_answer, } = questionData
    return (
        <div>
            <Card
                userAnswer={userAnswer}
                question={question}
                answers={answers}
                // correct_answer={correct_answer}
                callback={callback} />
        </div>

    )
}
