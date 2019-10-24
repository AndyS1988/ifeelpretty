import React from 'react';

import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="main-div centered-column">
      <section className="main-div-title container-contact-header">
        <h2>Schedule appointment now at:</h2>
        <a href="sms://+16194818525" className="title-link">(619) 481-8525</a>         
      </section>
      <section className="container-contact-map">
        <iframe
          id="google-map"
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.130423807058!2d-117.17971968486479!3d32.682577181000646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80deaccc4ec559dd%3A0x3831ca820affcb01!2s1351%20Orange%20Ave%2C%20Coronado%2C%20CA%2092118!5e0!3m2!1sen!2sus!4v1570315773398!5m2!1sen!2sus" 
          frameBorder="0"
          allowFullScreen=""
        >
        </iframe>
      </section>
      <section className="container-contact-details centered-row">
        <div id="address" className="centered-row">
          <div className="inner-circle centered-column-center">
            <h3>Location:</h3>
              <a href="https://www.google.com/maps/place/1351+Orange+Ave,+Coronado,+CA+92118/@32.6825772,-117.1797197,17z/data=!3m1!4b1!4m5!3m4!1s0x80deaccc4ec559dd:0x3831ca820affcb01!8m2!3d32.6825772!4d-117.177531" 
                target="_blank"
                rel="noopener noreferrer"
                id="address-link">
                <p>1351 Orange Avenue<br />Suite #7<br />Coronado, CA 92118</p>
              </a>
          </div>
        </div>
        <div id="phone" className="centered-row">
          <div className="inner-circle centered-column-center">
            <h3>Phone:</h3>
            <a href="sms://+16194818525" className="title-link">(619) 481-8525</a>
            <p style={{fontStyle: "italic", fontSize: "0.8em"}}>*for faster responses please text</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;