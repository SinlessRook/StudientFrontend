import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AnswerForm = ({ questionId, onAddAnswer }) => {
  const [content, setContent] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content || !createdBy) {
      alert('Please fill in all fields');
      return;
    }
    onAddAnswer({ question_id: questionId, content, created_by: createdBy });
    setContent('');
    setCreatedBy('');
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <textarea
        className="w-full p-2 border rounded mb-2"
        placeholder="Write your answer..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded mb-2"
        type="text"
        placeholder="Your name"
        value={createdBy}
        onChange={(e) => setCreatedBy(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit Answer
      </button>
    </form>
  );
};

AnswerForm.propTypes = {
  questionId: PropTypes.number.isRequired,
  onAddAnswer: PropTypes.func.isRequired,
};

export default AnswerForm;
