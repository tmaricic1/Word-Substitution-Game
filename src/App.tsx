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
      <div className="sentence-box">
        <p>The United Kingdom ____ more books than any other country.</p>
      </div>
      <div className="answers-box">
        <div className="answer">makes</div>
        <div className="answer">publishes</div>
      </div>
    </div>
  );
}

export default App;
