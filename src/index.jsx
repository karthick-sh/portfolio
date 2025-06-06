import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileAlt, faEnvelopeOpen  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faFileAlt, faLinkedin, faEnvelopeOpen)

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
);