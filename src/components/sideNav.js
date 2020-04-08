import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';
import './css/sidenav.css'
import { FiHome, FiInfo, FiSettings, FiEye, FiMail, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi'
import { IconContext } from "react-icons"

class sideNav extends Component {
  render() {
    return (

      <div className="sidenavmain">
        <NavLink to="/" style={{ outline: 'none' }}><div className="logo"></div></NavLink>
        <nav className="sidenav">
          <NavLink to="/" className="tooltip--right" data-tooltip="HOME">
            <IconContext.Provider value={{ className: "icons" }}>
              <FiHome />
            </IconContext.Provider>
          </NavLink>
          <NavLink to="/about" className="tooltip--right" data-tooltip="ABOUT">
            <IconContext.Provider value={{ className: "icons" }}>
              <FiInfo /></IconContext.Provider>
          </NavLink>
          <NavLink to="/skills" className="tooltip--right" data-tooltip="SKILLS">
            <IconContext.Provider value={{ className: "icons" }}>
              <FiSettings /></IconContext.Provider>
          </NavLink>
          <NavLink to="/project" className="tooltip--right" data-tooltip="PROJECTS" >
            <IconContext.Provider value={{ className: "icons" }}>
              <FiEye /></IconContext.Provider>
          </NavLink>
          <NavLink to="/contact" className="tooltip--right" data-tooltip="CONTACT">
            <IconContext.Provider value={{ className: "icons" }}>
              <FiMail /></IconContext.Provider>
          </NavLink>
        </nav>
        <nav className="bottomnav">
          <IconContext.Provider value={{ className: "icons2" }}>
            <a href="https://in.linkedin.com/in/hardik-ahalpara-3031ab150" target="_blank" rel="noopener noreferrer" style={{ outline: 'none' }}><FiLinkedin></FiLinkedin></a>
            <a href="https://github.com/hardikahalpara/" target="_blank" rel="noopener noreferrer" style={{ outline: 'none' }}><FiGithub /></a>
            <a href="https://www.instagram.com/_hardikgajjar/" target="_blank" rel="noopener noreferrer" style={{ outline: 'none' }}><FiInstagram /></a>
          </IconContext.Provider>
        </nav>

      </div >
    )
  }
}

export default sideNav
