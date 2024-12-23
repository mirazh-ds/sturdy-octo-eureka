import React, { Suspense, lazy, useMemo } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Menu from './components/menu';
import Wallpaper from './components/wallpaper';
import { ThemeProvider } from './utility/TjemeContext';
import usePreloadPages from './utility/usePreloadPages';
import Project from './pages/project';
import Writerone from './components/atoms/writerone';
import GlassCard from './components/atoms/card';
import Loader from './components/atoms/loader'; // Import the Loader component
import logo from './logo.png';
import regionepuglia from './utility/regione_puglia.svg';
import opentusk from './utility/opentusk.png';
import About from './pages/about';
import Dashboard from './pages/dashboard';


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

const AppContent = React.memo(() => {
  const location = useLocation();
  const isHomePage = useMemo(() => location.pathname === '/', [location.pathname]);

  return (
    <>
      <Menu />
      {isHomePage && <Wallpaper />}
      {isHomePage && <Writerone>ZonaZero</Writerone>}
      {isHomePage && <img className='provaimg' src={logo} alt='placeholderperlogooraebruttolosomalocambiogiuroi'/>}
      {isHomePage && <img className='puglia' src={regionepuglia} alt='regpul'/>}
      {isHomePage && <img className='opentusk' src={opentusk} alt='logo'/>}
      <Suspense fallback={<Loader />}> {/* Use Loader as fallback */}
        <Routes>
          <Route path="/" />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </Suspense>
    </>
  );
});

export default App;