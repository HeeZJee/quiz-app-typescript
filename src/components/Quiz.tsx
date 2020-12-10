import React, { ReactElement, useState } from "react";
import { fetchQuestions } from "../utils/api";
import { DIFFICULTY, IAnswersValue, IQuestion } from "../utils/helper";
import Loader from "react-loader-spinner";
import { IoPlayOutline } from "react-icons/io5/";
import { FiChevronRight, FiRotateCcw } from "react-icons/fi";
import Questions from "./Questions";
import Score from "./Score";
import { Footer, IconButton } from "../styles/style";
import { white } from "../utils/colors";

const TOTAL_QUESTION = 5;

export default function Quiz(): ReactElement {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(true);
  const [next, setNext] = useState(false);
  const [restart, setRestart] = useState(false);
  const [userAnswer, setUserAnswer] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [id, setId] = useState(0);
  const [answersValue, setAnswersValue] = useState<IAnswersValue[]>([]);

  const handleStart = () => {
    (async () => {
      setRestart(false);
      setUserAnswer(false);
      setCorrect(0);
      setIncorrect(0);
      setLoading(true);
      const response = await fetchQuestions(TOTAL_QUESTION, DIFFICULTY.EASY);
      setQuestions(response);
      setLoading(false);
      setStart(false);
      setNext(true);
      setId(0);
      setAnswersValue([]);
    })();
  };

  const handleNext = () => {
    if (id < TOTAL_QUESTION - 1) {
      setId(id + 1);
      setUserAnswer(false);
    } else {
      setRestart(true);
      setNext(false);
    }
  };

  const handleAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!start) {
      const answer = e.currentTarget.value;
      const correctValue = questions[id].correct_answer;
      const answerObject = {
        answer,
        correct: correctValue,
      };
      setAnswersValue((prev) => [...prev, answerObject]);
      const correctAnswer = correctValue === answer;
      correctAnswer ? setCorrect(correct + 1) : setIncorrect(incorrect + 1);
      setUserAnswer(true);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <Loader
        type="Puff"
        visible={loading}
        color="#c8c6f0"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(-50%, -50%)",
          left: "50%",
        }}
      />

      {!loading && !start && (
        <Score correct={correct} incorrect={incorrect} result={restart} />
      )}

      {!loading && !start && !restart && (
        <Questions
          questionData={questions[id]}
          callback={handleAnswer}
          userAnswer={userAnswer}
          answersValue={answersValue[id]}
        />
      )}

      {!loading && start && (
        <IconButton
          onClick={handleStart}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <IoPlayOutline color={white} size={60} title="start" />
        </IconButton>
      )}

      {!loading && next && (
        <IconButton
          onClick={handleNext}
          disabled={!userAnswer}
          style={{ marginTop: "1rem" }}
        >
          <FiChevronRight color={white} size={40} />
        </IconButton>
      )}

      {!loading && restart && (
        <IconButton
          onClick={handleStart}
          style={{
            position: "absolute",
            top: "65%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <FiRotateCcw color={white} size={40} />
        </IconButton>
      )}
      <Footer>
        <p>
          @
          <a
            href="https://www.linkedin.com/in/HeeZJee"
            target="_blank"
            rel="noopener noreferrer"
          >
            HeeZJee
          </a>
          &nbsp;&nbsp;&nbsp;Panacloud Bootcamp 2020
        </p>
      </Footer>
    </div>
  );
}
