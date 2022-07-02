import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import AboutPage from 'containers/AboutPage/AboutPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileAlt, faEnvelopeOpen  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faFileAlt, faLinkedin, faEnvelopeOpen)

render((
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="test" element={<AboutPage />} />
        </Routes>
    </BrowserRouter>
), document.getElementById('root'));