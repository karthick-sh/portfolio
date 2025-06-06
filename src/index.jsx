import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App/App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileAlt, faEnvelopeOpen, faBook, faPaintRoller, faComputer } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faSalesforce } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faFileAlt, faLinkedin, faEnvelopeOpen, faSalesforce, faBook, faPaintRoller, faComputer)

const root = createRoot(document.getElementById('root'));
root.render(<App />);