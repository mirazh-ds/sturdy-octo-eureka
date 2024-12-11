import React from 'react';
import logo from './utility/cathead.gif';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Menu from './components/menu';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div>
      <Menu />
      <div className='HomeMainBody'>
        <h1 className='h1Home'>Progetto Hackthon</h1>
      </div>
    </div>
  );
}

export default App;