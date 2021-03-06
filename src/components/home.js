import React, { Component } from 'react'
import './css/home.css'
import { NavLink } from 'react-router-dom';



class home extends Component {
  render() {
    return (

      <div className="homeContainer">
        <p style={{ top: '10%', left: '8%', lineHeight: '25px' }} class="htmltags" id="info">&lt;!--mobile version is still under development as few components are yet to be made responsive, continue on Desktop for better experience.--&gt;</p>
        <p style={{ top: '5%', left: '5%' }} class="htmltags">&lt;html&gt;</p>
        <p style={{ top: '13%', left: '7%' }} class="htmltags">&lt;body&gt;</p>
        <p style={{ top: '30%', left: '10%' }} class="htmltags">&lt;h1&gt;</p>
        <p style={{ top: '53%', left: '50%' }} class="htmltags">&lt;/h1&gt;</p>
        <p style={{ top: '87%', left: '7%' }} class="htmltags">&lt;/body&gt;</p>
        <p style={{ top: '95%', left: '5%' }} class="htmltags">&lt;/html&gt;</p>
        <div className="homeMain">
          <div className="animateForward">Hi,</div>
          <div className="animateForward">I'm Hardik Ahalpara,</div>
          <div className="animateForward">Computer Science Student.</div>
          <p style={{ color: '#08FDD8', fontSize: '12px' }}>FRONT END DEVELOPER / NATIVE ANDROID DEVELOPER / MACHINE LEARNING ENTHUSIAST / INTERN</p>
          <NavLink to="/contact" style={{ outline: 'none' }}><button class="talkButton">L E T ' S&nbsp;&nbsp;&nbsp;&nbsp;T A L K</button></NavLink>
        </div>
        {/* <div className="svg"></div> */}
        <div class="pulse1"></div>
        <div class="pulse2"></div>
        <div class="icon"></div>
      </div >
    )
  }
}

export default home
