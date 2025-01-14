import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landingPage";
import Navbar from "./components/LandingPage/Navbar";
import Login from "./components/AccountsPage/Login";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/schedule" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
