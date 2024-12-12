import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Menu from './components/menu';
import About from './pages/about';
import Wallpaper from './components/wallpaper';
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
<>
      <Menu />
      {location.pathname === '/' && (
        <>
          <Wallpaper />

        </>
      )}
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
      </Routes>
</>
  );
}
export default App;
