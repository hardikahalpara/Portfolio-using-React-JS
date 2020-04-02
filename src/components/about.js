import React, { Component } from 'react'
import './css/about.css'

class about extends Component {
  render() {
    return (
      <div>
        <p style={{ top: '5%', left: '5%' }} class="htmltags">&lt;html&gt;</p>
        <p style={{ top: '13%', left: '7%' }} class="htmltags">&lt;body&gt;</p>
        <p style={{ top: '30%', left: '10%' }} class="htmltags">&lt;h1&gt;</p>
        <p style={{ top: '53%', left: '46%' }} class="htmltags">&lt;/h1&gt;</p>
        <p style={{ top: '87%', left: '7%' }} class="htmltags">&lt;/body&gt;</p>
        <p style={{ top: '95%', left: '5%' }} class="htmltags">&lt;/html&gt;</p>
        <div className="aboutTitle">
          <div className="animateForward">About Me:</div>
        </div>
      </div>
    )
  }
}

export default about
