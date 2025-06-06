import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background from '../../components/Background/Background';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ResearchPage from '../ResearchPage/ResearchPage';
import WorkPage from '../WorkPage/WorkPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import Navbar from '../../components/Navbar/Navbar';

import './App.css';

const NAV_LINKS = [
  { label: 'home', key: 'home', path: '/' },
  { label: 'work', key: 'work', path: '/work' },
  { label: 'research', key: 'research', path: '/research' },
  { label: 'projects', key: 'projects', path: '/projects' },
  { label: 'about', key: 'about', path: '/about' },
];

const AppContent = () => {
  const location = useLocation();
  
  // Determine active page based on current route
  const getActivePageFromPath = (pathname) => {
    const navLink = NAV_LINKS.find(link => link.path === pathname);
    return navLink ? navLink.key : 'home';
  };
  
  const activePage = getActivePageFromPath(location.pathname);

  return (
    <div className='container'>
      <Background />
      <Navbar navItems={NAV_LINKS} activePage={activePage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
