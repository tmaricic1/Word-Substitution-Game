import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="Title">Word Substitution Game</h1>
      <div className="card">
        <p>
          Please choose the correct word to complete the sentence. Have fun!
        </p>
      </div>
      <div className="question-list">
        <div className="question-wrapper">
          <div className="sentence-box">
            <p>The United Kingdom ____ more books than any other country.</p>
          </div>
          <div className="answers-box">
            <div className="answer answerA">Makes</div>
            <div className="answer answerB">Publishes</div>
          </div>
        </div>
        <div className="question-wrapper">
          <div className="sentence-box">
            <p>Mary _____ about what happened to Joe.</p>
          </div>
          <div className="answers-box">
            <div className="answer answerA">Inquired</div>
            <div className="answer answerB">Asked</div>
          </div>
        </div>
        <div className="question-wrapper">
          <div className="sentence-box">
            <p>Example sentence ______.</p>
          </div>
          <div className="answers-box">
            <div className="answer answerA">Correct</div>
            <div className="answer answerB">Incorrect</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
