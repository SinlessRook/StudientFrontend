import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import logo from '../../assets/codecrafters.svg';

const LoginPage = () => {
  const server = "http://127.0.0.1:8000/";
  const { setAuthTokens } = useContext(GlobalContext);
  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    fetch(server + "accounts/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((data) => {
        alert(data.message);
        setAuthTokens({ access: true, refresh: true });
        navigate('/schedule'); 
      })
      .catch((error) => {
        alert(error.message); // Display error message
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-[#7493A8] to-[#fff8ef]">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 text-center">
        <div className="mb-6">
          <img
            src={logo}
            alt="Website Logo"
            className="w-20 h-20 rounded-full mx-auto"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Sign In</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="text-left">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 focus:outline-none"
            />
          </div>
          <div className="text-left">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-400 text-white font-semibold rounded-md hover:bg-teal-500 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="#" className="text-teal-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
