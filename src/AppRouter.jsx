import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landingPage";
import Navbar from "./components/General/Navbar";
import Login from "./components/AccountsPage/Login";
import ForumPage from "./pages/ForumPage";
import SignUp from "./components/AccountsPage/SignUp";
import Prepare from "./pages/prepare";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/schedule" element={<Dashboard />} />
                <Route path="/prepare" element={<Prepare/>} />
                <Route path="/forum" element={<ForumPage/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;
