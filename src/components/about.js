import React, { Component } from 'react'
import './css/about.css'

class about extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <p style={{ top: '5%', left: '5%' }} class="htmltags">&lt;html&gt;</p>
        <p style={{ top: '13%', left: '7%' }} class="htmltags">&lt;body&gt;</p>
        <p style={{ top: '30%', left: '10%' }} class="htmltags">&lt;h1&gt;</p>
        <p style={{ top: '37%', left: '25%' }} class="htmltags">&lt;/h1&gt;</p>
        <p style={{ top: '87%', left: '7%' }} class="htmltags">&lt;/body&gt;</p>
        <p style={{ top: '95%', left: '5%' }} class="htmltags">&lt;/html&gt;</p>
        <div className="aboutTitle">
          <div className="animateForward1">About Me:</div>
          <br></br>
          <p style={{ color: 'white', fontSize: '16px' }}>
            Well, I'd say I am on a path to become a mission driven full stack developer.
            <br></br>I’ve always sought out opportunities and challenges that are meaningful to me.
            <br></br> Although my career decisional path has taken many twists and turns,
            <br></br>I've never stopped engaging my passion to help others and solve problems.
            <br></br><br></br>
            Grown in a family of four. Being the youngest one, i've always been a little inquisitive.
            <br></br>Fan of classic pop music, outdoor activities, and TV series. Always been attracted to good food.
            <br></br><br></br>
            Excited to thrive into the industry and work on ambitious projects with positive people.</p>

        </div>
        <div class="loading-animation">
          <span class="first-ball"></span>
          <span class="second-ball"></span>
          <span class="third-ball"></span>

        </div>
      </div>
    )
  }
}

export default about
