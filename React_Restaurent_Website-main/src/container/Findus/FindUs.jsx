import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='contact'/>
      <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className="app__wrapper_content">
        <p className="p__opensans">Lane Ends Bungalow, Sai Nagar,Pune.</p>
        <p className="p__cormorant" style={{color:'#DCCA87' , margin:'2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 AM - 10:00 PM</p>
        <p className="p__opensans">Sat - SUn: 10:00 AM - 11:00 PM.</p>
        <button className='custom__button' style={{marginTop:'2rem'}}> Visit Us</button>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
