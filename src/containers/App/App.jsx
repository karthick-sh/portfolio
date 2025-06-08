import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background from '../../components/Background/Background';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ResearchPage from '../ResearchPage/ResearchPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import Navbar from '../../components/Navbar/Navbar';

import './App.css';

const NAV_LINKS = [
  { label: 'home', key: 'home', path: '/', component: HomePage },
  { label: 'research', key: 'research', path: '/research', component: ResearchPage },
  { label: 'projects', key: 'projects', path: '/projects', component: ProjectsPage },
  { label: 'about', key: 'about', path: '/about', component: AboutPage },
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
        {NAV_LINKS.map((link) => (
          <Route key={link.key} path={link.path} element={<link.component />} />
        ))}
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
