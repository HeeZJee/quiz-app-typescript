import React, { ReactElement, useState } from 'react'
import { fetchQuestions } from '../utils/api'
import { DIFFICULTY, IQuestion } from '../utils/helper'
import Loader from 'react-loader-spinner'
import { GrNext, GrPowerReset } from 'react-icons/gr';
import { IoPlayOutline } from 'react-icons/io5/';
import Questions from './Questions';
import Score from './Score';


const TOTAL_QUESTION = 5
const EMPTY_ARRAY = Array.from(Array(TOTAL_QUESTION).keys())

export default function Quiz(): ReactElement {

    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [loading, setLoading] = useState(false)
    const [start, setStart] = useState(true)
    const [next, setNext] = useState(false)
    const [id, setId] = useState(0)
    const [restart, setRestart] = useState(false)
    const [userAnswer, setUserAnswer] = useState<boolean>(false)
    const [corrects, setCorrects] = useState<boolean[]>([])
    const [answer, setAnswer] = useState<boolean | null>(null)
    const handleStart = () => {
        (async () => {
            setRestart(false)
            setUserAnswer(false)
            // setStart(false)
            setLoading(true)
            const response = await fetchQuestions(TOTAL_QUESTION, DIFFICULTY.EASY)
            setQuestions(response)
            setLoading(false)
            setStart(false)
            setNext(true)
            setId(0)
        })()
    }

    const handleNext = () => {
        if (id < TOTAL_QUESTION - 1) {
            setId(id + 1)
            setUserAnswer(false)
        }
        else {
            // setStart(false)
            setRestart(true)
            setNext(false)
            // setUserAnswer(true)
        }
    }

    const handleAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!start) {
            const answer = e.currentTarget.value
            const correctAnswer = questions[id].correct_answer === answer

            setAnswer(correctAnswer)
            setUserAnswer(true)
            setCorrects(prevState => [...prevState, correctAnswer])
        }
    }

    return (
        <div>
            <h1>Quiz App</h1>
            <Score
                answer={answer}
                length={EMPTY_ARRAY}
                questionId={id}
            />
            {/* <Question /> */}
            <Loader type='Puff' visible={loading} color='#c8c6f0' />
            {!loading && !start && !restart &&
                <Questions
                    // questionId={id + 1}
                    questionData={questions[id]}
                    callback={handleAnswer}
                    userAnswer={userAnswer}
                />}

            { start && <button onClick={handleStart}><IoPlayOutline /></button>}
            { restart && <button onClick={handleStart}><GrPowerReset /></button>}

            {next && < button onClick={handleNext} disabled={!userAnswer} ><GrNext /></button>}
        </div >
    )
}
