import React from 'react';
import '../stylesheets/about.css';

function About() {
  return (
    <div className='about'>
      <div className='about__moto'>
        <p>>&nbsp;&nbsp; Self Taught and passionate programmer.</p>
        <p>>&nbsp;&nbsp; Eager to learn new tools and technologies.</p>
        <p>> &nbsp;&nbsp;Fast learner.</p>
      </div>
      <div className='about__education'>
        <h2 className='about__Title'>Education</h2>
        <div className='about__educationCard'>
          <h3 className='about__schoolName'>
            Shahjalal University of Science and Technology, Sylhet.
          </h3>
          <p className='about__major'>
            Bachelor of Science in Computer Scince and Technology.
          </p>
          <p className='about__period'>2019-2023</p>
        </div>
      </div>
      <div className='about__interests'>
        <h2 className='about__Title'>Interests</h2>
        <ul className='about__interestsUl'>
          <li>Computer Security</li>
          <li>Networking</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
