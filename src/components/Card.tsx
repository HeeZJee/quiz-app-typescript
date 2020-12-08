import React, { ReactElement } from 'react'


interface IQuestionCard {
    question: string
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: boolean;
}

export default function Card({ question, answers, callback, userAnswer }: IQuestionCard): ReactElement {
    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <button value={answer} key={answer} onClick={callback} disabled={userAnswer} >
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                ))}
            </div>
        </div >
    )
}
