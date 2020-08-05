import React from 'react';
import profile_image from '../images/profile_image.svg';
import scroll_image from '../images/scroll_animation.svg';
import '../stylesheets/landing.css';

function Landing() {
  return (
    <div className='landing'>
      <img
        className='landing__profileImage'
        src={profile_image}
        alt='profile_image'
      />
      <div className='landing__content'>
        <h1 className='landing__title'>Antar Roy</h1>
        <h2 className='landing__about'>Programmer | Developer</h2>
        <h5 className='landing__description'>
          UnderGrad CSE Student
          {/* </h5>
        <h5 className='landing__description'> */}
          <br />
          Shahjalal University of Science and Technology
        </h5>
        <div className='landing__animationSpace'>
          <img
            src={scroll_image}
            alt='landing__animation'
            className='landing__animation'
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
