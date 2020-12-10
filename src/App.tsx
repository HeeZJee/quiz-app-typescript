import React from 'react';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Quiz from './components/Quiz';
import { Wrapper } from './styles/style';


function App() {
  return (
    <Wrapper >
      <Quiz />
    </Wrapper>
  );
}

export default App;
