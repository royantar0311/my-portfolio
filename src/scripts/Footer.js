import React from 'react';
import '../stylesheets/footer.css';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p>
          737 / k Jubilee Road, Madhya Para
          <br />
          Brahmanbaria-3400, Bangladesh
        </p>
        <div className='footer__socials'>
          <a
            href='mailto:royantar1@gmail.com'
            target='blank'
            className='footer__links'
          >
            <MailIcon className='footer__linkIcons' />
            Email
          </a>
          <a
            href='https://github.com/royantar0311'
            target='blank'
            className='footer__links'
          >
            <GitHubIcon className='footer__linkIcons' />
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/royantar0311/'
            target='blank'
            className='footer__links'
          >
            <LinkedInIcon className='footer__linkIcons' />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
