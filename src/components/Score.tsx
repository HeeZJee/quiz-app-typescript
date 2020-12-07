import React, { ReactElement } from 'react'
import { TAnswer, ANSWER } from './../utils/helper'

interface Props {
    length: any[];
    answer: boolean | null;
    questionId: number;
}


export default function Score({ answer, length, questionId }: Props): ReactElement {

    const answerState: TAnswer = answer === true ? ANSWER.CORRECT : answer === false ? ANSWER.INCORRECT : undefined
    const foo = answerState !== undefined ? length.splice(questionId, 1, answerState) : undefined
    // const foo = answerState !== undefined ? (length[questionId] === ANSWER.CORRECT || ANSWER.INCORRECT) && length.splice(questionId, 1, answerState) : undefined
    // answer !== null && length.splice(questionId, 1, answerState)
    console.log('aaaa----', answerState)
    console.log(foo)
    console.log('asfdfd', length[questionId])
    console.log(length)
    return (
        <div>
            {length.map((a, i) =>
                a === ANSWER.CORRECT
                    ? <span key={i}> correct</span>
                    : a === ANSWER.INCORRECT
                        ? <span key={i}> incorrect</span>
                        : <span key={i}> empty</span>
            )}

        </div>
    )
}
