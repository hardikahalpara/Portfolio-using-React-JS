import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';
import './css/sidenav.css'
import { FiHome, FiInfo, FiSettings, FiEye, FiMail, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi'
import { IconContext } from "react-icons"

class sideNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temp: ''
    }
  }
  handleHoverInHome = () => {
    this.setState({ temp: "HOME" })

  }
  handleHoverInInfo = () => {
    this.setState({ temp: "ABOUT" })
  }
  handleHoverInSettings = () => {
    this.setState({ temp: "SKILLS" })
  }
  handleHoverInEye = () => {
    this.setState({ temp: "PROJECTS" })
  }
  handleHoverInMail = () => {
    this.setState({ temp: "CONTACT" })
  }
  handleHoverOut = () => {
    this.setState({ temp: "" })
  }

  render() {
    const { temp } = this.state
    return (

      <div className="sidenavmain">
        <a href="#"><div className="logo"></div></a>

        <nav className="sidenav">
          <NavLink to="/" onMouseEnter={this.handleHoverInHome} onMouseLeave={this.handleHoverOut} style={{ textDecoration: "none" }}>
            {temp == "HOME" ? <div className="iconsText">{temp}</div> :
              <IconContext.Provider value={{ className: "icons" }}>
                <FiHome /></IconContext.Provider>}

          </NavLink>
          <NavLink to="/about" onMouseEnter={this.handleHoverInInfo} onMouseLeave={this.handleHoverOut} style={{ textDecoration: "none" }}>
            {temp == "ABOUT" ? <div className="iconsText">{temp}</div> :
              <IconContext.Provider value={{ className: "icons" }}>
                <FiInfo /></IconContext.Provider>}

          </NavLink>
          <NavLink to="/" onMouseEnter={this.handleHoverInSettings} onMouseLeave={this.handleHoverOut} style={{ textDecoration: "none" }}>
            {temp == "SKILLS" ? <div className="iconsText">{temp}</div> :
              <IconContext.Provider value={{ className: "icons" }}>
                <FiSettings /></IconContext.Provider>}

          </NavLink>
          <NavLink to="/" onMouseEnter={this.handleHoverInEye} onMouseLeave={this.handleHoverOut} style={{ textDecoration: "none" }}>
            {temp == "PROJECTS" ? <div className="iconsText">{temp}</div> :
              <IconContext.Provider value={{ className: "icons" }}>
                <FiEye /></IconContext.Provider>}

          </NavLink>
          <NavLink to="/" onMouseEnter={this.handleHoverInMail} onMouseLeave={this.handleHoverOut} style={{ textDecoration: "none" }}>
            {temp == "CONTACT" ? <div className="iconsText">{temp}</div> :
              <IconContext.Provider value={{ className: "icons" }}>
                <FiMail /></IconContext.Provider>}
          </NavLink>
        </nav>
        <nav className="bottomnav">
          <IconContext.Provider value={{ className: "icons2" }}>
            <a href="#"><FiLinkedin></FiLinkedin></a>
            <a href="#"><FiGithub /></a>
            <a href="#"><FiInstagram /></a>
          </IconContext.Provider>
        </nav>

      </div >
    )
  }
}

export default sideNav
