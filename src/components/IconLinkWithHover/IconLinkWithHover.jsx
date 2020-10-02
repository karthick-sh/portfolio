import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './IconLinkWithHover.css'


const IconLinkWithHover = (props) => {
	const {link, icon, iconStyle} = props;
	return (
        <div className="iconlink__container">
            <a href={link} className="iconlink__link">
                <FontAwesomeIcon className="iconlink__icon" icon={[iconStyle, icon]} size="2x" />
            </a>
        </div>
	)
}


export default IconLinkWithHover;