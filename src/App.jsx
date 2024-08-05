import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [feedbackAnswers, setFeedbackAnswers] = useState({});
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackResult, setFeedbackResult] = useState("");

  const [movieAnswers, setMovieAnswers] = useState({});
  const [movieSubmitted, setMovieSubmitted] = useState(false);
  const [movieResult, setMovieResult] = useState("");

  const feedbackQuestions = [
    {
      id: 1,
      question: "Rate the overall experience:",
      options: ["Excellent", "Good", "Average", "Poor"],
    },
    {
      id: 2,
      question: "How likely are you to recommend us to a friend or colleague?",
      options: ["Very Likely", "Likely", "Unlikely", "Very Unlikely"],
    },
  ];

  const movieQuestions = [
    {
      id: 1,
      question: "Favorite Movie Genre?",
      options: ["Action", "Comedy", "Drama", "Sci-Fi"],
    },
    {
      id: 2,
      question: "Favorite Movie of All Time?",
      options: [
        "The Shawshank Redemption",
        "The Godfather",
        "Pulp Fiction",
        "The Dark Knight",
      ],
    },
  ];

  const handleFeedbackOptionChange = (questionId, option) => {
    setFeedbackAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleFeedbackSubmit = () => {
    const selectedOptions = feedbackQuestions.map(
      (question) => feedbackAnswers[question.id],
    );
    const filteredOptions = selectedOptions.filter(
      (option) => option !== undefined && option !== null,
    );
    const formattedResult = filteredOptions.join(", ");
    setFeedbackResult(formattedResult);
    setFeedbackSubmitted(true);
  };

  const handleMovieOptionChange = (questionId, option) => {
    setMovieAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleMovieSubmit = () => {
    const selectedOptions = movieQuestions.map(
      (question) => movieAnswers[question.id],
    );
    const filteredOptions = selectedOptions.filter(
      (option) => option !== undefined && option !== null,
    );
    const formattedResult = filteredOptions.join(", ");
    setMovieResult(formattedResult);
    setMovieSubmitted(true);
  };

  return (
    <main>
      <section>
        <h2>Feedback App</h2>
        {feedbackSubmitted ? (
          <div>
            <h3>Thank You for Your Feedback!</h3>
            <p>Your Answers: {feedbackResult}</p>
          </div>
        ) : (
          <>
            {feedbackQuestions.map((question) => (
              <div key={question.id}>
                <h3>{question.question}</h3>
                <ul>
                  {question.options.map((option) => (
                    <li key={option}>
                      <label>
                        <input
                          type="radio"
                          name={`feedbackQuestion${question.id}`}
                          value={option}
                          checked={feedbackAnswers[question.id] === option}
                          onChange={() =>
                            handleFeedbackOptionChange(question.id, option)
                          }
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button onClick={handleFeedbackSubmit}>Submit</button>
          </>
        )}
      </section>

      <section>
        <h2>Favorite Movie App</h2>
        {movieSubmitted ? (
          <div>
            <h3>Thank You for Sharing Your Favorites!</h3>
            <p>{movieResult}</p>
          </div>
        ) : (
          <>
            {movieQuestions.map((question) => (
              <div key={question.id}>
                <h3>{question.question}</h3>
                <ul>
                  {question.options.map((option) => (
                    <li key={option}>
                      <label>
                        <input
                          type="radio"
                          name={`movieQuestion${question.id}`}
                          value={option}
                          checked={movieAnswers[question.id] === option}
                          onChange={() =>
                            handleMovieOptionChange(question.id, option)
                          }
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button onClick={handleMovieSubmit}>Submit</button>
          </>
        )}
      </section>
    </main>
  );
}
