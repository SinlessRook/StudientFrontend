import React from 'react';
import PropTypes from 'prop-types';

const AnswerList = ({ answers }) => {
  if (!answers.length) {
    return <p className="text-center text-gray-600">No answers yet.</p>;
  }

  return (
    <ul className="mt-4 space-y-4">
      {answers.map((answer) => (
        <li key={answer.id} className="p-4 border rounded bg-gray-100">
          <p>{answer.content}</p>
          <p className="text-sm text-gray-500">By {answer.created_by}</p>
          <p className="text-sm text-gray-400">
            {new Date(answer.created_at).toLocaleString()}
          </p>
        </li>
      ))}
    </ul>
  );
};

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      created_by: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ),
};

export default AnswerList;
