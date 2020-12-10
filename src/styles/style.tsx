import styled from "styled-components";
import { black, white, green, red } from "../utils/colors";

export const Wrapper = styled.div`
  background-color: ${black};
  color: ${white};
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

interface IButton {
  correct: boolean;
  click: boolean;
}

export const AnswerButton = styled.button<IButton>`
  border: none;
  background-color: ${({ correct, click }) =>
    click ? (correct ? `${green}` : `${red}`) : null};
  color: ${({ click }) => (!click ? `${black}` : `${white}`)};
  border-radius: 25px;
  height: 50px;
  font-size: 17px;
  font-family: inherit;
  font-weight: 600;
  margin: 5px 0;
  padding: auto 50px;
  width: 240px;
  transition: all 0.2s ease;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const IconButton = styled.button`
  border: none;
  text-align: center;
  font-size: 21px;
  background-color: transparent;
  outline: none;
  -moz-outline: none;
  cursor: pointer;
`;

export const ScoreWrapper = styled.div`
  font-weight: 600;
`;

export const IconWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const ScoreIcon = styled.span`
  background-color: ${({ color }) => color};
  padding: 1rem;
  height: 15px;
  line-height: 15px;
  width: 15px;
  border-radius: 15px;
`;

export const PercentageWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  width: 250px;
  font-size: 18px;
  border-radius: 20px;
  padding: 1rem 0;
  background-color: ${({ color }) => color};
  color: ${white};
`;

export const Footer = styled.footer`
  background-color: ${white};
  color: ${black};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
