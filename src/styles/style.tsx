import styled from 'styled-components';
import { black, white, green, red } from '../utils/colors';




export const Wrapper = styled.div`
background-color: ${black};
color: ${white};
text-align: center;
display: flex;
align-items: center;
flex-direction: column;
`


export const ButtonWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`


interface IButton {
    correct: boolean;
    click: boolean;
}

export const AnswerButton = styled.button<IButton>`
border: none;
background-color: ${({ correct, click }) => click ? correct ? `${green}` : `${red}` : null};
color: ${({ click, correct }) => click && !correct ? `${white}` : `${black}`};
border-radius: 25px;
height: 50px;
font-size: 18px;
margin: .5rem 0;
width: 240px;
cursor: pointer;
`

export const IconButton = styled.button`
border: none;
text-align: center;
font-size: 21px;
background-color: transparent;
outline: none;
-moz-outline: none;
cursor: pointer;
`
