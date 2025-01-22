import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import QuestionDetails from './QuestionDetails';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [flair, setFlair] = useState('');
  const [sortField, setSortField] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams({
          search: searchQuery,
          flair,
          sort: sortField,
          order: sortOrder,
        }).toString();

        const response = await fetch(`http://127.0.0.1:8000/forum/posts_view/?${queryParams}`);
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }

        const data = await response.json();
        const validQuestions = data.filter((question) => question && question.description); // Filter valid questions
        setQuestions(validQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setQuestions([]); // Reset state on error
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [searchQuery, flair, sortField, sortOrder]);

  return (
    <div className="p-8">
      {/* Search and Filter Section */}
      <div className="flex flex-row mb-8 justify-center gap-4">
        <input
          className="px-4 rounded-3xl border border-gray-900 w-3/4"
          type="text"
          placeholder="Search Questions"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <div className="flex gap-2 items-center">
          <button
            className="px-4 py-2 rounded-lg border border-gray-900"
            onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
          >
            <FontAwesomeIcon className="px-1" icon={faSort} />
            {sortOrder === 'asc' ? 'Asc' : 'Desc'}
          </button>
          <button
            className="px-4 py-2 rounded-lg border border-gray-900"
            onClick={() => setSortField('created_at')}
          >
            <FontAwesomeIcon className="px-1" icon={faFilter} />
            Sort by Date
          </button>
        </div>
      </div>

      {/* Render Cards Only If Questions Exist */}
      {!loading && questions.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {questions.map((question) => (
            <Card
              key={question.id}
              question={question}
              onClick={() => setSelectedQuestion(question)} // Open details modal
            />
          ))}
        </div>
      )}

      {/* Loading or No Questions Message */}
      {loading ? (
        <p className="text-center text-white">Loading questions...</p>
      ) : questions.length === 0 ? null : null}

      {/* Question Details Modal */}
      {selectedQuestion && (
        <QuestionDetails
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)} // Close the modal
        />
      )}
    </div>
  );
};

export default QuestionList;
