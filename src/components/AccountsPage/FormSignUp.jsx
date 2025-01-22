import React, { useState, useContext } from 'react';
import logo from '../../assets/codecrafters.svg';
import { useNavigate } from 'react-router-dom';
import Loader from '../General/Loader';
import { GlobalContext } from '../../Context/GlobalContext';


const SignUpForm = ({ setStep, setTasks }) => {
  const navigate = useNavigate();

  // State for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { setAuthTokens } = useContext(GlobalContext)

  // Server URL
  const server = "http://127.0.0.1:8000/";

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Step 1 - Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Step 2 - Create user account
    setLoading(true);
    await fetch(server + 'accounts/signup/',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password
      })
    } ).then((response) => {
      if (!response.ok) {
        setError(response.statusText);
        setLoading(false);
        return;
      }
    }).then((data) => {
      setAuthTokens({ username: username, password: password, });
      
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false); });
    // Step 3 Fetch Subjects
    await fetch(server + 'scheduler/getAllSubjects/', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then((response) => {
        if (!response.ok) {
          setError(response.statusText);
          setLoading(false);
          return;
        }
        return response.json();  // Parse the response as JSON
      })
      .then((data) => {
        console.log(data);
        setTasks(data.subjects);  // Store the data in the state variable
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
        setStep(2);
      });
    

    
  }

  return (
    <>
      {loading && <Loader />}
      <div className="bg-white rounded-lg shadow-lg p-8 py-4 w-96 text-center">
        <div className="mb-6">
          <img src={logo} alt="Website Logo" className="w-20 h-20 rounded-full mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Sign Up</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="text-left">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 focus:outline-none"
            />
          </div>
          <div className="text-left">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 focus:outline-none"
            />
          </div>
          <div className="text-left">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter your password again"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 focus:outline-none"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-teal-400 text-white font-semibold rounded-md hover:bg-teal-500 transition duration-300"
          >
            Next
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a onClick={() => navigate('/login')} className="text-teal-400 hover:underline">
            Sign in
          </a>
        </p>
        <br />
      </div>
    </>
  );
};

export default SignUpForm;
