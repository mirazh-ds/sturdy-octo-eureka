import React, { Suspense, lazy, useMemo } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Menu from './components/menu';
import Wallpaper from './components/wallpaper';
import { ThemeProvider } from './utility/TjemeContext';
import usePreloadPages from './utility/usePreloadPages';
import Project from './pages/project';
import Writerone from './components/atoms/writerone';

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

const AppContent = React.memo(() => {
  const location = useLocation();
  const isHomePage = useMemo(() => location.pathname === '/', [location.pathname]);

  return (
    <>
      <Menu />
{     isHomePage && <Wallpaper/>
    
}
{     isHomePage && <Writerone>
        Group</Writerone>
}   

      <Suspense fallback={<Writerone>Loading...</Writerone>}>
        <Routes>
          <Route path="/" />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
});

export default App;
