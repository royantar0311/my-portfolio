import React, { useState } from 'react';
import '../stylesheets/header.css';
import { NavLink } from 'react-router-dom';
import MenuIcon from '../images/menu-black-48dp.svg';

function Header() {
  const [hamOpen, setHamOpen] = useState(false);

  return (
    <div className='header'>
      <div className='header__content'>
        <NavLink exact to='/' className='link'>
          <h1 className='header__logo'>royantar-me.web.app</h1>
        </NavLink>
        <img
          src={MenuIcon}
          alt='menu'
          onClick={() => {
            setHamOpen(!hamOpen);
          }}
          className='header__menuIcon'
        />
        <div className={`header__nav ${hamOpen && 'header__nav__ham'}`}>
          <ul>
            <NavLink
              exact
              to='/about'
              className='link header__navItem'
              onClick={() => setHamOpen(false)}
            >
              <li className='header__list-item'>About</li>
            </NavLink>
            <NavLink
              exact
              to='/about'
              className='link header__navItem'
              onClick={() => setHamOpen(false)}
            >
              <li exact className='header__list-item'>
                Resume
              </li>
            </NavLink>
            <NavLink
              exact
              to='/about'
              className='link header__navItem'
              onClick={() => setHamOpen(false)}
            >
              <li className='header__list-item'>Skills</li>
            </NavLink>
            <NavLink
              exact
              to='/about'
              className='link'
              onClick={() => setHamOpen(false)}
            >
              <li className='header__list-item'>projects</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
