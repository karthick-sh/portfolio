import React from 'react';
import { render } from 'react-dom';
import App from 'containers/App/App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileAlt, faEnvelopeOpen  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faFileAlt, faLinkedin, faEnvelopeOpen)

render(<App />, document.getElementById('root'));