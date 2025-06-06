import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ListRevealer.css';

function ListRevealer({ reveal_list }) {
	const [currentIcon, setCurrentIcon] = useState(null);
	const [showIcon, setShowIcon] = useState(false);

	useEffect(() => {
		var Messenger = function(el){
			var m = this;
			
			m.init = function(){
				m.codeletters = "&#*+%?£@§$";
				m.message = 0;
				m.current_length = 0;
				m.fadeBuffer = false;
				m.messages = reveal_list;
				
				setTimeout(m.animateIn, 100);
			};
			
			m.generateRandomString = function(length){
				var random_text = '';
				while(random_text.length < length){
					random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
				} 
				
				return random_text;
			};
			
			m.getCurrentMessage = function(){
				var currentItem = m.messages[m.message];
				return typeof currentItem === 'string' ? currentItem : currentItem.text;
			};
			
			m.getCurrentIcon = function(){
				var currentItem = m.messages[m.message];
				return typeof currentItem === 'string' ? null : currentItem.icon;
			};
			
			m.animateIn = function(){
				if(m.current_length < m.getCurrentMessage().length){
					m.current_length = m.current_length + 2;
					if(m.current_length > m.getCurrentMessage().length) {
						m.current_length = m.getCurrentMessage().length;
					}
					
					var message = m.generateRandomString(m.current_length);
					el.innerHTML = message;
					
					setTimeout(m.animateIn, 20);
				} else { 
					setTimeout(m.animateFadeBuffer, 20);
				}
			};
			
			m.animateFadeBuffer = function(){
				if(m.fadeBuffer === false){
					m.fadeBuffer = [];
					for(var i = 0; i < m.getCurrentMessage().length; i++){
						m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.getCurrentMessage().charAt(i)});
					}
				}
				
				var do_cycles = false;
				var message = ''; 
				
				for(i = 0; i < m.fadeBuffer.length; i++){
					var fader = m.fadeBuffer[i];
					if(fader.c > 0){
						do_cycles = true;
						fader.c--;
						message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
					} else {
						message += fader.l;
					}
				}
				
				el.innerHTML = message;
				
				if(do_cycles === true){
					setTimeout(m.animateFadeBuffer, 50);
				} else {
					// Show icon after text animation is complete
					m.showIcon();
					setTimeout(m.cycleText, 2000);
				}
			};
			
			m.showIcon = function(){
				var icon = m.getCurrentIcon();
				if(icon){
					// Create a temporary element to render the icon
					var iconElement = document.createElement('span');
					iconElement.className = 'messenger-icon';
					iconElement.innerHTML = ' ';
					
					// Use React to render the FontAwesome icon
					setCurrentIcon(icon);
					setShowIcon(true);
				} else {
					setCurrentIcon(null);
					setShowIcon(false);
				}
			};
			
			m.cycleText = function(){
				m.message = m.message + 1;
				if(m.message >= m.messages.length){
					m.message = 0;
				}
				
				m.current_length = 0;
				m.fadeBuffer = false;
				el.innerHTML = '';
				setCurrentIcon(null);
				setShowIcon(false);
				
				setTimeout(m.animateIn, 200);
			};
			
			m.init();
		}

		new Messenger(document.getElementById('messenger'));
	}, [reveal_list]);

	return (
		<span className="listRevealer__container">
			<h2 id="messenger" className="home__messenger">_</h2>
			{showIcon && currentIcon && (
				<FontAwesomeIcon 
					icon={[currentIcon.style, currentIcon.name]} 
					className="listRevealer__icon"
					style={{marginLeft: '8px', marginTop: '4px'}}
				/>
			)}
		</span>
	);
}

export default ListRevealer;