import styled from 'styled-components';




export const Wrapper = styled.div`
background-color: #1c1b4e;
color: #dddbff;
text-align: center;
display: flex;
justify-content: center;
align-items: center;`

export const ButtonWrapper = styled.div`
display: flex;
flex-direction: column
`


interface IButton {
    correct: boolean;
    click: boolean;
}

export const Button = styled.button<IButton>`
border: none;
background-color: ${({ correct, click }) => click ? correct ? '#30d158' : '#ff453a' : "#dddbff"};
color: ${({ click, correct }) => click && !correct ? '#dddbff' : '#1c1b4e'};
border-radius: 25px;
height: 50px;
font-size: 18px;
margin: 0 2rem 1rem; 
`