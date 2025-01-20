import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnswerForm from './AnswerForm';
import AnswerList from './AnswerList';
import ActionButtons from './ActionButtons';

const QuestionDetails = ({ question, onClose }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Fetch answers when the component loads
    const fetchAnswers = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/forum/answers/${question.id}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch answers');
        }
        const data = await response.json();
        setAnswers(data);
      } catch (error) {
        console.error('Error fetching answers:', error);
      }
    };

    fetchAnswers();
  }, [question.id]);

  const handleAddAnswer = async (newAnswer) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/forum/answer/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnswer),
      });

      if (!response.ok) {
        throw new Error('Failed to add answer');
      }

      const addedAnswer = await response.json();

      // Update the state with the newly added answer
      setAnswers((prevAnswers) => [...prevAnswers, addedAnswer]);
    } catch (error) {
      console.error('Error adding answer:', error);
    }
  };

  if (!question) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
        <h1 className="text-xl font-bold">{question.description}</h1>
        <AnswerList answers={answers} />
        <ActionButtons onClose={onClose} />
        <AnswerForm questionId={question.id} onAddAnswer={handleAddAnswer} />
      </div>
    </div>
  );
};

QuestionDetails.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuestionDetails;
