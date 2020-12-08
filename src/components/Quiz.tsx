import React, { ReactElement, useState } from 'react'
import { fetchQuestions } from '../utils/api'
import { DIFFICULTY, IQuestion } from '../utils/helper'
import Loader from 'react-loader-spinner'
import { GrNext, GrPowerReset } from 'react-icons/gr';
import { IoPlayOutline } from 'react-icons/io5/';
import Questions from './Questions';
import Score from './Score';


const TOTAL_QUESTION = 5

export default function Quiz(): ReactElement {

    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [loading, setLoading] = useState(false)
    const [start, setStart] = useState(true)
    const [next, setNext] = useState(false)
    const [id, setId] = useState(0)
    const [restart, setRestart] = useState(false)
    const [userAnswer, setUserAnswer] = useState<boolean>(false)
    const [score, setScore] = useState(0);
    const handleStart = () => {
        (async () => {
            setRestart(false)
            setUserAnswer(false)
            setScore(0);
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
            correctAnswer && setScore(score + 1)
            setUserAnswer(true)
        }
    }

    return (
        <div>
            <h1>Quiz App</h1>
            <Loader type='Puff' visible={loading} color='#c8c6f0' />
            { !loading && !start &&
                <Score
                    score={score}
                    total={TOTAL_QUESTION}
                    result={restart}
                />}
            {!loading && !start && !restart &&
                <Questions
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
