import React, { Suspense, lazy, useMemo } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Menu from './components/menu';
import Wallpaper from './components/wallpaper';
import { ThemeProvider } from './utility/TjemeContext';
import usePreloadPages from './utility/usePreloadPages';
import Loader from './components/atoms/loader';

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
      {isHomePage && <Wallpaper />}
      <Suspense /*fallback={<Loader />}*/>
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
});

export default App;
