import React from 'react'
import { NavLink } from 'react-router-dom';
// import classes from './Navigation.module.css'
import './Navigation.css'


const Navigation = () => {
  return (
    <header className='.header'>
      <nav>
        <ul>
          <li>
            {/* <NavLink className={(navData) => navData.isActive && '.active'} to='/home'>Home</NavLink> */}
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/aboutUs'>About us</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation