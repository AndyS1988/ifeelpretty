import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Navigation from './Navigation/Navigation';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';

import './App.css';

const App = () => {
  return (
  	<BrowserRouter>
	    <div className="App">
	    	<Helmet>
            	<meta charSet="utf-8" />
            	<meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>I Feel Pretty By Sofia</title>
                <link rel="canonical" href="https://www.ifeelprettybysofia.com" />
                <meta property="site_name" content="I Feel Pretty By Sofia" />
    			<meta property="title" content="I Feel Pretty By Sofia" />
    			<meta property="url" content="https://www.ifeelprettybysofia.com" />
			    <meta property="type" content="website" />
			    <meta property="description" content="Sofia Caplaneris Bio: During the 19 years of my professional experience the natural beauty 
			    and health have always been my top priority, which is why I only use the highest quality products for my skin 
			    care line and lash extensions. My skin care products are: cruelty free, without mineral oils, without parabens, without added fragrance, and are
				made locally in California" />
			    <meta name="keywords" content="Sofia Caplaneris, esthetician, facial, custom facial, eyelash extensions, waxing, reflexology, ingham method, 
			    spa, beauty, skin care, skin, eyelashes, pamper, skin analysis, cleanse, exfoliation, extractions, hydrate, acne, anti-aging, Coronado" />
			    <meta name="author" content="Andrea Spaska-Cox" />
            </Helmet>
	      <header>
	      	<Navigation />
	      </header>
	      <main className="centered-column">
	      	<About />
	      	<Services />
	      	<Contact />
	      </main>
	    </div>
	</BrowserRouter>
  );
}

export default App;
