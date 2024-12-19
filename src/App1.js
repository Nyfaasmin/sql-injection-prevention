import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Login1 from './Login1';
import Register1 from './Register1';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import './styles.css';

const App1 = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/register" element={<Register1 />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App1;
