import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';
const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos molestias aliquam quia. Numquam, voluptas. Labore perspiciatis natus possimus et. Nisi inventore</p>
        <button style={{marginTop:'10px'}} type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'></div>
        <img className='knife_img' src={images.knife} alt="" />

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos molestias aliquam quia. Numquam, voluptas. Labore perspiciatis natus possimus et. Nisi inventore</p>
        <button style={{marginTop:'10px'}} type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
