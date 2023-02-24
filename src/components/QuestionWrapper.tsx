import { useState } from "react";

export default function QuestionWrapper(props: {
  question: string;
  correct: string;
  incorrect: string;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [answers, setAnswers] = useState(
    [props.correct, props.incorrect].sort(() => Math.random() - 0.5)
  );
  const [selected, setSelected] = useState("");

  return (
    <div className="question-wrapper">
      <div className="sentence-box">
        <p>{props.question}</p>
      </div>
      <div className="answers-box">
        <div
          className={`answer answerA ${isClicked ? "clicked" : ""}
            ${
              props.correct === selected && isClicked && selected === answers[0]
                ? "correct"
                : ""
            }
            ${
              props.incorrect === selected &&
              isClicked &&
              selected === answers[0]
                ? "incorrect"
                : ""
            }`}
          onClick={function (e) {
            setIsClicked(true);
            setSelected(answers[0]);
          }}
        >
          {answers[0]}
        </div>
        <div
          id="correct"
          className={`answer answerB ${isClicked ? "clicked" : ""}
            ${
              props.correct === selected && isClicked && selected === answers[1]
                ? "correct"
                : ""
            }
            ${
              props.incorrect === selected &&
              isClicked &&
              selected === answers[1]
                ? "incorrect"
                : ""
            }`}
          onClick={function (e) {
            setIsClicked(true);
            setSelected(answers[1]);
          }}
        >
          {answers[1]}
        </div>
      </div>
    </div>
  );
}
