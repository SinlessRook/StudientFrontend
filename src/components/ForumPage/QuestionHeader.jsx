import React from 'react';
import PropTypes from 'prop-types';

const QuestionHeader = ({ question }) => (
  <>
    <h2 className="text-xl font-bold mb-4">{question.description}</h2>
    {question.image && (
      <img src={question.image} alt="Question" className="mb-4" />
    )}
    <p className="text-gray-700 mb-4">Category: {question.flair}</p>
  </>
);

QuestionHeader.propTypes = {
  question: PropTypes.shape({
    description: PropTypes.string.isRequired,
    flair: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default QuestionHeader;
