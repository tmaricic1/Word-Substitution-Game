import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import QuestionWrapper from "./components/QuestionWrapper";

function App() {
  return (
    <div className="App">
      <h1 className="Title">Word Substitution Game</h1>
      <div className="card">
        <p>
          Please choose the correct word to complete the sentence. Have fun!
        </p>
      </div>
      <div className="question-list">
        <QuestionWrapper
          question="This is a question"
          correct="blah"
          incorrect="bloop"
        />
        <QuestionWrapper
          question="This is a question"
          correct="blah"
          incorrect="bloop"
        />
        <QuestionWrapper
          question="This is a question"
          correct="blah"
          incorrect="bloop"
        />
        <QuestionWrapper
          question="This is a question"
          correct="blah"
          incorrect="bloop"
        />
        <QuestionWrapper
          question="This is a question"
          correct="blah"
          incorrect="bloop"
        />
      </div>
    </div>
  );
}

export default App;
