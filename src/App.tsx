import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Menu from './components/menu';
import Wallpaper from './components/wallpaper';
import { ThemeProvider } from './utility/TjemeContext';
import usePreloadPages from './utility/usePreloadPages'

const About = lazy(() => import('./pages/about'));

function App() {
  usePreloadPages();

  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
