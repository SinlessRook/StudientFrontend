import React from 'react';
import PropTypes from 'prop-types';

const ActionButtons = ({ showAnswerForm, setShowAnswerForm, onClose }) => (
  <div className="mt-4 flex justify-end gap-4">
    <button
      onClick={() => setShowAnswerForm((prev) => !prev)}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
    >
      {showAnswerForm ? 'Cancel' : 'Add Answer'}
    </button>
    <button
      onClick={onClose}
      className="px-4 py-2 bg-red-500 text-white rounded-lg"
    >
      Close
    </button>
  </div>
);

ActionButtons.propTypes = {
  showAnswerForm: PropTypes.bool.isRequired,
  setShowAnswerForm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ActionButtons;
