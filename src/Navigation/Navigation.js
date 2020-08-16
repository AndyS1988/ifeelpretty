import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import logo from './logo.png';

import './Navigation.css';


const Navigation = () => {
  return (
    <div id="navigation">
        <div id="covid-announcement">
            <div><strong>To my dear customers and community: </strong>We are temporarily closed due to Covid-19. We hope to see you soon. Stay pretty!</div>
        </div>
    	<nav id="navigation-bar">
            <img id="logo" src={logo} alt="logo for I Feel Pretty By Sofia" />
            <div id="spacer" />
    		<ul>
    			<li>
    				<NavLink to="/#about" 
    					scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    					activeClassName="selected"
						>About
					</NavLink>
    			</li>
    			<li>
    				<NavLink 
    					to="/#services" 
    					scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    					activeClassName="selected"
						>Services
					</NavLink>
    			</li>
    			<li>
    				<NavLink 
    					to="/#contact" 
    					scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    					activeClassName="selected"
						>Contact
					</NavLink>
    			</li>    			
    		</ul>
    	</nav>
    </div>
  );
}

export default Navigation;