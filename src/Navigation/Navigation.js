import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import logo from './logo.png';

import './Navigation.css';


const Navigation = () => {
  return (
    <div id="navigation">
    	<nav id="navigation-bar">
            <img id="logo" src={logo} alt="logo for I Feel Pretty By Sofia" />
            <div id="spacer" />
    		<ul>
    			<li>
    				<NavLink to="/#about" 
    					scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
    					activeClassName="selected"
						>About
					</NavLink>
    			</li>
    			<li>
    				<NavLink 
    					to="/#services" 
    					scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
    					activeClassName="selected"
						>Services
					</NavLink>
    			</li>
    			<li>
    				<NavLink 
    					to="/#contact" 
    					scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
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