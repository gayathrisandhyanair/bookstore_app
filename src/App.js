import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  return (
    <div>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
        onNavigate={setCurrentPage}
      />
      {currentPage === 'login' && (
        <Login onLogin={() => { setIsLoggedIn(true); setCurrentPage('home'); }} />
      )}
      {currentPage === 'signup' && (
        <Signup onNavigate={() => setCurrentPage('login')} />
      )}
      {currentPage === 'home' && isLoggedIn && <Home />}
    </div>
  );
}

export default App;
