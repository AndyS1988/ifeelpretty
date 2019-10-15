import React from 'react';
import profilePicture from './profile-picture-square.jpg';
import aboutHeart from './about-heart.png';

import './About.css';


const About = () => {
  return (
    <div id="about" className="main-div wave">
      <div id="container-about-text" className="centered-column">
      	<h1 className="main-div-title">Hello, my name is Sofia Caplaneris</h1>
      	<p className ="about-text">
      	My first glimpse of beauty was with my eldest sister. She introduced me to my first facial at age 13 from a 
        seasoned esthetician from Holland, Elle. I was immediately hooked and needed to know more!
      	</p>
      	<p className ="about-text">
      	My drive for knowledge took me to many parts of the world in pursuit of crafting my skills. 
      	I've taken courses in the US, Egypt, Spain, Costa Rica, Mexico, London & Prague. I have been a California Board 
        Certified Esthetician for over 15 years and a nail tech for over 11 years. I'm proud to say that I'm an
        expert speed waxer with certifications in brow shaping and lash artistry. 
        </p>
        <p className ="about-text">I run my own successful business and 
        work at a handful of elite spas. I'm a bonafide spa patron and luv luv luv the spa! I'm truly grateful to work in 
        an industry that I'm passionate about and guarantee that I will trantslate that passion into your continued beauty.
      	</p>
      	<p className="about-text">XOXO, <br />Sofia</p>
        <img id="about-heart" alt="decorative heart to accompany the text" src={aboutHeart} />
      </div>
      <div id="container-about-photo" className="centered-column">
        <img id="profile-picture" alt="Sofia Caplaneris profile" src={profilePicture} />
        <h2 id="title-products">My skin care products are:</h2>
        <div id="product-info">
          <div className="round-division centered-row">Cruelty Free</div>
          <div className="round-division centered-row">Made Locally</div>
          <div className="round-division centered-row">Without Mineral Oils</div>
          <div className="round-division centered-row">Without Parabens</div>
          <div className="round-division centered-row">Without Added Fragrance</div>
        </div>
      </div>
    </div>
  );
}

export default About;