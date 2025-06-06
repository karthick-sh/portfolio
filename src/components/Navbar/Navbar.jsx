import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', key: 'home' },
  { label: 'About', key: 'about' },
  { label: 'Research', key: 'research' },
  { label: 'Work', key: 'work' },
  { label: 'Projects', key: 'projects' },
];

const Navbar = ({ activePage, onNav }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef({});
  const [pillX, setPillX] = useState(0);
  const [pillY, setPillY] = useState(0);
  const [pillWidth, setPillWidth] = useState(0);
  const [pillHeight, setPillHeight] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useLayoutEffect(() => {
    const activeRef = itemRefs.current[activePage];
    const containerRect = containerRef.current?.getBoundingClientRect();
    
    if (activeRef && containerRect) {
      const rect = activeRef.getBoundingClientRect();
      const x = rect.left - containerRect.left;
      const y = rect.top - containerRect.top;
      
      setPillX(x);
      setPillY(y);
      setPillWidth(rect.width);
      setPillHeight(rect.height);
      
      if (!isInitialized) {
        setIsInitialized(true);
      }
    }
  }, [activePage, isInitialized]);

  return (
    <nav className="navbar__container">
      <ul className="navbar__list" ref={containerRef} style={{ position: 'relative' }}>
        {isInitialized && (
          <motion.div
            className="navbar__pill"
            animate={isInitialized ? { 
              x: pillX,
              y: pillY,
              width: pillWidth,
              height: pillHeight
            } : false}
            initial={{
              x: pillX,
              y: pillY,
              width: pillWidth,
              height: pillHeight
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />
        )}
        {NAV_LINKS.map(link => (
          <li
            key={link.key}
            ref={el => (itemRefs.current[link.key] = el)}
            className={`navbar__item${activePage === link.key ? ' navbar__item--active' : ''}`}
            onClick={() => onNav(link.key)}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {link.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar; 