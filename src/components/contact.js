import React, { Component } from 'react'
import './css/contact.css'


class contact extends Component {
  render() {
    return (
      <div>
        <p style={{ top: '5%', left: '5%' }} class="htmltags">&lt;html&gt;</p>
        <p style={{ top: '13%', left: '7%' }} class="htmltags">&lt;body&gt;</p>
        <p style={{ top: '30%', left: '10%' }} class="htmltags">&lt;h1&gt;</p>
        <p style={{ top: '37%', left: '27%' }} class="htmltags">&lt;/h1&gt;</p>
        <p style={{ top: '87%', left: '7%' }} class="htmltags">&lt;/body&gt;</p>
        <p style={{ top: '95%', left: '5%' }} class="htmltags">&lt;/html&gt;</p>
        <div className="contactTitle">
          <div className="animateForward2">Contact Me:</div>
          <br></br>
          <p className="label">FIND ME AT :</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className="answer">Surat, Gujarat</p>
          <br></br><br></br><p className="label">PHONE :</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className="answer">+91-9727555105</p>
          <br></br><br></br><p className="label">E-MAIL :</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className="answer">hardik.j.ahalpara@gmail.com</p>

        </div>

      </div>
    )
  }
}

export default contact
