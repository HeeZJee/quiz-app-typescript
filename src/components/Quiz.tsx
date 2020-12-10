import React, { ReactElement, useState } from 'react'
import { fetchQuestions } from '../utils/api'
import { DIFFICULTY, IQuestion } from '../utils/helper'
import Loader from 'react-loader-spinner'
import { IoPlayOutline } from 'react-icons/io5/';
import { FiChevronRight, FiRotateCcw } from 'react-icons/fi';
import Questions from './Questions';
import Score from './Score';
import { IconButton } from '../styles/style';
import { white } from '../utils/colors';


const TOTAL_QUESTION = 5

export default function Quiz(): ReactElement {

    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [loading, setLoading] = useState(false)
    const [start, setStart] = useState(true)
    const [next, setNext] = useState(false)
    const [id, setId] = useState(0)
    const [restart, setRestart] = useState(false)
    const [userAnswer, setUserAnswer] = useState<boolean>(false)
    const [answerValue, setAnswerValue] = useState<string>('')
    const [score, setScore] = useState(0);
    const [correct, setCorrectValue] = useState('')

    const handleStart = () => {
        (async () => {
            setRestart(false)
            setUserAnswer(false)
            setScore(0);
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
            setRestart(true)
            setNext(false)
        }
    }

    const handleAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!start) {
            const answer = e.currentTarget.value
            setAnswerValue(answer)
            const correctAnswer = questions[id].correct_answer === answer
            correctAnswer && setCorrectValue(questions[id].correct_answer)
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
                    answerValue={answerValue}
                    correct={correct}
                />}

            {!loading && start &&
                <IconButton onClick={handleStart} style={{ position: 'absolute', top: "50%", transform: "translate(-50%, -50%)" }}>
                    <IoPlayOutline color={white} size={60} title="start" />
                </IconButton>}

            {!loading && next &&
                <IconButton onClick={handleNext} disabled={!userAnswer} style={{ position: "relative", top: 0, bottom: 0 }}>
                    <FiChevronRight color={white} size={40} />
                </IconButton>}

            {!loading && restart &&
                <IconButton onClick={handleStart} style={{ position: 'absolute', top: "50%", transform: "translate(-50%, -50%)" }}>
                    <FiRotateCcw color={white} size={40} />
                </IconButton>}
        </div >
    )
}
