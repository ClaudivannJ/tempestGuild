import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateTournamentPage from './pages/CreateTournamentPage';
import ListTournamentsPage from './pages/ListTournamentsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-tournament" element={<CreateTournamentPage />} />
        <Route path="/tournaments" element={<ListTournamentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
