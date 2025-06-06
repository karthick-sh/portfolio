import React from 'react';
import Name from '../../components/Name/Name'
import ListRevealer from '../../components/ListRevealer/ListRevealer';

import resume from '../../assets/files/karthick_shankar_resume.pdf';
import { REVEAL_LIST } from './constants';

import './HomePage.css'
import IconLinkWithHover from '../../components/IconLinkWithHover/IconLinkWithHover';

const HomePage = () => {
    return (
        <div className='home__container'>
            <Name firstName="Karthick" lastName="Shankar" />
            <div className="home__designation">
                <h2 className="home__messenger">is</h2> <ListRevealer reveal_list={REVEAL_LIST} />
            </div>
            <div className="home__contactlist">
                <IconLinkWithHover link="https://www.linkedin.com/in/karthick-sh" tooltipText="linkedin.com/karthick-sh" icon="linkedin" iconStyle="fab" />
                <IconLinkWithHover link="https://www.github.com/karthick-sh" tooltipText="github.com/karthick-sh" icon="github" iconStyle="fab" />
                <IconLinkWithHover link="mailto:karthick@cmu.edu" tooltipText="karthick@cmu.edu" icon="envelope-open" iconStyle="fas" />
                <IconLinkWithHover link={resume} tooltipText="Resume" icon="file-alt" iconStyle="fas" />
            </div>
		</div>
    )
}

export default HomePage;