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
          <IconContext.Provider value={{ className: "icons" }}>
            <NavLink to="/" onMouseEnter={this.handleHoverInHome} onMouseLeave={this.handleHoverOut} style={{ textDecoration: "none" }} activeClassName="linkActive">
              {temp == "HOME" ? <div className="iconsText">{temp}</div> : <FiHome />}
              {/* <FiHome /> */}
            </NavLink>
            <NavLink to="/about" onMouseEnter={this.handleHoverInInfo} onMouseLeave={this.handleHoverOut} style={{ textDecoration: "none" }} activeClassName="linkActive">
              {temp == "ABOUT" ? <div className="iconsText">{temp}</div> : <FiInfo />}
              {/* <FiInfo /> */}
            </NavLink>
            <NavLink to="/" onMouseEnter={this.handleHoverInSettings} onMouseLeave={this.handleHoverOut} style={{ textDecoration: "none" }} activeClassName="linkActive">
              {temp == "SKILLS" ? <div className="iconsText">{temp}</div> : <FiSettings />}
              {/* <FiSettings /> */}
            </NavLink>
            <NavLink to="/" onMouseEnter={this.handleHoverInEye} onMouseLeave={this.handleHoverOut} style={{ textDecoration: "none" }} activeClassName="linkActive">
              {temp == "PROJECTS" ? <div className="iconsText">{temp}</div> : <FiEye />}
              {/* <FiEye /> */}
            </NavLink>
            <NavLink to="/" onMouseEnter={this.handleHoverInMail} onMouseLeave={this.handleHoverOut} style={{ textDecoration: "none" }} activeClassName="linkActive">
              {temp == "CONTACT" ? <div className="iconsText">{temp}</div> : <FiMail />}
              {/* <FiMail /> */}

            </NavLink>

          </IconContext.Provider>

        </nav>
        <nav className="bottomnav">
          <IconContext.Provider value={{ className: "icons2" }}>
            <a href="#"><FiLinkedin></FiLinkedin></a>
            <a href="#"><FiGithub /></a>
            <a href="#"><FiInstagram /></a>
          </IconContext.Provider>
        </nav>

      </div>
    )
  }
}

export default sideNav
