import React from 'react';
import Name from 'components/Name/Name'
import ListRevealer from 'components/ListRevealer/ListRevealer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './HomePage.css'

const HomePage = () => {
    const reveal_list = [
        'researcher',
        'software developer.',
        'hacker.',
        'graphic designer.',
        'technology enthusiast.'
    ];
    return (
        <div className='home__container'>
            <Name 
            firstName="Karthick"
            lastName="Shankar" />
            <div className="home__designation">
                <h2 className="home__messenger">is a</h2> <ListRevealer reveal_list={reveal_list} />
            </div>
            <div className="home__contactlist">
                <a href="https://www.linkedin.com/in/karthick-sh">
                    <FontAwesomeIcon className="home__contact_icon" icon={['fab', 'linkedin']} size="2x" />
                </a>
                <a href="https://www.github.com/karthick-sh">
                    <FontAwesomeIcon className="home__contact_icon" icon={['fab', 'github']} size="2x" />
                </a>
                <a href="mailto:karthick@cmu.edu">
                    <FontAwesomeIcon className="home__contact_icon" icon="envelope-open" size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/karthick-sh">
                    <FontAwesomeIcon className="home__contact_icon" icon="file-alt" size="2x" />
                </a>
            </div>
		</div>
    )
}

export default HomePage;