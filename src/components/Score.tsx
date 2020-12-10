import { ReactElement } from "react";
import { green, red } from "../utils/colors";
import {
  ScoreWrapper,
  ScoreIcon,
  IconWrapper,
  PercentageWrapper,
} from "./../styles/style";

interface Props {
  correct: number;
  result: boolean;
  incorrect: number;
}

export default function Score({
  correct,
  result,
  incorrect,
}: Props): ReactElement {
  const percentage = (correct / (correct + incorrect)) * 100;
  const color = percentage > 59 ? green : red;
  return (
    <ScoreWrapper>
      <IconWrapper>
        <ScoreIcon color={green} style={{ marginRight: "20px" }}>
          {correct}
        </ScoreIcon>
        <ScoreIcon color={red} style={{ marginLeft: "20px" }}>
          {incorrect}
        </ScoreIcon>
      </IconWrapper>
      {result && (
        <>
          <p style={{ fontSize: 24, marginTop: "50px" }}>
            {color === green ? `Passed 👏` : `Fail 😲`}
          </p>
          <PercentageWrapper color={color}>
            <span>Score: {percentage}%</span>
          </PercentageWrapper>
        </>
      )}
    </ScoreWrapper>
  );
}
