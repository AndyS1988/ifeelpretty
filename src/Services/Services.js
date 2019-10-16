import React from 'react';
import	packageDecoration from './service-decoration-optimized.jpg'

import './Services.css';

const Services = () => {
  return (
	<div id="services" className="main-div centered-column">
		<h2 className="main-div-title services-title">Services</h2>
		<div className="services-container">
		    <section id="facial" className="service-card">
		    	<div className="price centered-row">$99</div>
		    	<h3 style={{marginTop: "-2.8em"}}>Custom Facial</h3>
		    	<p className="service-card-txt">A 55 minute treatment which meets the skin care needs of each individual.</p>
		    	<p className="service-card-txt-tight">The treatment includes:</p>
		    	<p className="service-card-txt-tight">skin analysis, cleanse, exfoliation, extractions, either a hydrating, acne or anti-aging mask. 
		    	Each facial concludes with a nourishing moisturizer with SPF and a scalp, neck and shoulder massage.</p>
		    	<p className="service-card-txt-tight" style={{fontStyle: "italic", fontSize: "0.8em"}}>(with monthly membership only $90)</p>
		    	<p className="service-card-txt" style={{fontStyle: "italic", fontSize: "0.8em"}}>40 minute Teen Custom Facial is available with focus on 
		    		extractions, does not include neck and shoulder massage.<br />$75</p>
		    </section>
		    <section id="facial-add-ons" className="service-card">
		    	<h3>Add Ons to Custom Facial</h3>
		    	<p className="service-card-txt">Oxygen Treatment<br />$35</p>
		    	<p className="service-card-txt">Neck & Decollete Treatment<br />$35</p>
		    	<p className="service-card-txt">Collagen Hand Treatment<br />$15</p>
		    	<p className="service-card-txt">30 minute Therapeutic Reflexology Session<br />$50</p>
		    </section>
		    <section id="eyelashes" className="service-card">
		    	<h3>Eyelash Extensions</h3>
		    	<p className="service-card-txt">Creating natural looking lashes to enhance your beauty.</p>
		    	<p className="service-card-txt">Full set<br />$110</p>
		    	<p className="service-card-txt">Fills within 2 weeks<br />$50</p>
		    	<p className="service-card-txt">Fills within 3 weeks<br />$65</p>
		    </section>
		    <section id="waxing" className="service-card">
		    	<h3>Waxing</h3>
		    	<p className="service-card-txt-tight">Full leg with bikini<br />$75</p>
		    	<p className="service-card-txt-tight">Half leg<br />$30</p>
		    	<p className="service-card-txt-tight">Full face<br />$45</p>
		    	<p className="service-card-txt-tight">Brows<br />$21</p>
		    	<p className="service-card-txt-tight">Lip<br />$11</p>
		    	<p className="service-card-txt-tight">Back<br />$60</p>
		    </section>
		    <section id="reflexology" className="service-card">
		    	<div className="price centered-row">$85</div>
		    	<h3 style={{marginTop: "-2.8em"}}>Reflexology</h3>
		    	<p className="service-card-txt-tight">A 50 minute Therapeutic Reflexology Session using the original Ingham Method.</p>
		    	<p className="service-card-txt-tight">* a technique of reflexology when applied to the feet has a natural way of:</p>
		    	<p className="service-card-txt-tight">relaxation</p>
		    	<p className="service-card-txt-tight">improving nerve functions</p>
		    	<p className="service-card-txt-tight">improving blood circulation</p>
		    	<p className="service-card-txt-tight">eliminating toxins</p>
		    	<p className="service-card-txt-tight">boosting metabolism & energy level</p>
		    	<p className="service-card-txt-tight">and much more</p>
		    	<p className="service-card-txt-tight" style={{fontStyle: "italic", fontSize: "0.8em"}}>(house calls available with added fee for mileage)</p>
		    </section>
		    <section id="package" className="service-card">
		    	<div className="price centered-row">$149</div>
		    	<h3 style={{marginTop: "-2.8em"}}>Pamper Me Package</h3>
		    	<p className="service-card-txt">A 50 minute Custom Facial followed by a 30 minute Therapeutic Reflexology Session using the original Ingham Method.</p>
		    	<img id="package-decoration-image" alt="pink flower" src={packageDecoration} />
		    </section>
	    </div>
   	</div>
  );
}

export default Services;