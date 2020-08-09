import React from 'react';
import '../stylesheets/projects.css';

function Projects() {
  return (
    <div className='projects'>
      <div className='project_card'>
        <h3 className='projects__headings'>Sust Bus</h3>
        <p className='projects__description'>
          A real-time tracking system of Bus Service, SUST to track buses
          provided by SUST on the roads of Sylhet city. <br />
          <br />
          Used GoogleMaps Api to get the location of the bus, having a GPS
          device installed in it. for safety, anyone trying to access the
          location service must log in. So there is an authentication system. To
          ensure users from campus only, University Student ID card verification
          is there.
        </p>
        <a
          className='projects__seeProjectLink'
          href='https://github.com/royantar0311/SUST-BUS-SERVICE'
          target='blank'
        >
          &nbsp;See Project&nbsp;
        </a>
      </div>
      <div className='project_card'>
        <h3 className='projects__headings'>Social-Demo</h3>
        <p className='projects__description'>
          A peer to peer chatting web-application <br />
          <br />
          Enter your unique name and enter a room name as same as your friends
          and enjoy!
        </p>
        <a
          className='projects__seeProjectLink'
          href='https://github.com/royantar0311/social-demo'
          target='blank'
        >
          &nbsp;See Project&nbsp;
        </a>
      </div>
    </div>
  );
}

export default Projects;
