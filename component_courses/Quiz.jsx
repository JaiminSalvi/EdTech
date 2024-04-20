import React, { useState } from "react";
// import "./Quiz.css"; // Import CSS file for styling

const Quiz = () => {
  // Quiz questions and answers
  const [flag, setFlag] = useState(false);
  const [score, setScore] = useState("");
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: 'Who wrote the play "Hamlet"?',
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Leo Tolstoy",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "CH4"],
      correctAnswer: "H2O",
    },
  ];

  // State to track user's answers
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );

  // Function to handle user's answer selection
  const handleAnswerSelection = (event, questionIndex) => {
    const { value } = event.target;
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = value;
      return updatedAnswers;
    });
  };

  // Function to calculate user's score
  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  // Function to handle user's submission
  const handleClick = (event) => {
    event.preventDefault();
    setFlag(true);
    setScore(((calculateScore() / questions.length) * 100).toFixed(2));
  };

  return (
    <div className="quiz-container">
      <h2
        style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}
      >
        {flag ? "Your Results" : "Quiz"}
      </h2>
      {questions.map((question, index) => (
        <div key={index} className="question">
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "500",
              marginBottom: "20px",
              //   backgroundColor: flag
              //     ? userAnswers[index] === question.correctAnswer
              //       ? "green"
              //       : "red"
              //     : "inherit",
            }}
          >
            {index + 1}. {question.question}
          </h3>
          <ul className="options">
            {/* // Rendering logic for the options */}
            {question.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                style={{
                  backgroundColor:
                    flag && option === question.correctAnswer
                      ? "green" // If the option is the correct answer, set the background to green
                      : flag && userAnswers[index] === option
                      ? "red" // If the user selected this option and it's incorrect, set the background to red
                      : "inherit",
                  color:
                    flag && userAnswers[index] === option
                      ? option === question.correctAnswer
                        ? "white"
                        : "black"
                      : "inherit",
                }}
              >
                <label>
                  <input
                    type="radio"
                    required
                    name={`question-${index}`}
                    value={option}
                    onChange={(event) => handleAnswerSelection(event, index)}
                    checked={userAnswers[index] === option}
                    style={{
                      marginRight: "40px",
                      marginLeft: "20px",
                      scale: "1.4",
                    }}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {!flag && (
        <div className="score">
          <button onClick={(e) => handleClick(e)}>Submit</button>
        </div>
      )}
      {flag && (
        <div>
          <h1>
            Your Score is {calculateScore()} out of {questions.length}
          </h1>
          <h1>Percentage : {score}%</h1>
        </div>
      )}
    </div>
  );
};

export default Quiz;
