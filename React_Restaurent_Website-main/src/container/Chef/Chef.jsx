import React, { Suspense } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's world"/>
      <h1 className='headtext__cormorant'>What We Belive In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
            <img src={images.quote} alt="" />
            <p className='p__opensans'>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Eos Molestias Aliquam Quia. Numquam, Voluptas. Labore Perspiciatis Natus Possimus Et. Nisi Inventore</p>
        </div>
      
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>

  </div>
);

export default Chef;
