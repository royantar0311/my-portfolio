import React from 'react';
import '../stylesheets/skills.css';
import externalLinkIcon from '../images/external-link-alt-solid.svg';
function Skills() {
  return (
    <div className='skills'>
      <div className='skills__languages'>
        <h3 className='skills__headings'>Programming Languages</h3>
        <ul className='skills__ul'>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div className='skills__compititiveProgramming'>
        <h3 className='skills__headings'>Problem Solving</h3>
        <ul className='skills__ul'>
          <li>
            &nbsp;&nbsp;UVA (85+)&nbsp;&nbsp;&nbsp;&nbsp; Handle:&nbsp;&nbsp;
            <a href='https://uhunt.onlinejudge.org/id/1024063'>
              royantar0311{' '}
              <img
                className='skills__externalLinkIcon'
                src={externalLinkIcon}
                alt='external_link'
              />
            </a>
          </li>
          <li>
            &nbsp;&nbsp;LightOJ (105+)&nbsp;&nbsp;&nbsp;&nbsp;
            Handle:&nbsp;&nbsp;
            <a href='http://lightoj.com/volume_userstat.php?user_id=45412'>
              Antar Roy{' '}
              <img
                className='skills__externalLinkIcon'
                src={externalLinkIcon}
                alt='external_link'
              />
            </a>
          </li>
          <li>
            &nbsp;&nbsp;Codeforces (380+)&nbsp;&nbsp;&nbsp;&nbsp;
            Handle:&nbsp;&nbsp;
            <a href='https://codeforces.com/profile/RoyAntar0311'>
              royantar0311{' '}
              <img
                className='skills__externalLinkIcon'
                src={externalLinkIcon}
                alt='external_link'
              />
            </a>
          </li>
          <li>
            &nbsp;&nbsp;LeetCode (21)&nbsp;&nbsp;&nbsp;&nbsp;
            Handle:&nbsp;&nbsp;
            <a href='https://leetcode.com/royantar0311/'>
              royantar0311{' '}
              <img
                className='skills__externalLinkIcon'
                src={externalLinkIcon}
                alt='external_link'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className='skills__toolsFrameworks'>
        <h3 className='skills__headings'>Tools/Frameworks</h3>
        <ul className='skills__ul'>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Git</li>
          <li>Express</li>
          <li>Socket.io</li>
          <li>Android Development</li>
          <li>Firebase</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
