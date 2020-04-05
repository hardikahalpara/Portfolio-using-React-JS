import React, { Component } from 'react'
import './css/skills.css'
import $ from 'jquery'
class skills extends Component {

  render() {
    return (
      <div>

        <p style={{ top: '5%', left: '5%' }} class="htmltags">&lt;body&gt;</p>
        <p style={{ top: '10%', left: '10%' }} class="htmltags">&lt;h1&gt;</p>
        <p style={{ top: '17.5%', left: '35%' }} class="htmltags">&lt;/h1&gt;</p>
        <p style={{ top: '30%', left: '10%' }} class="htmltags">&lt;ul&gt;</p>
        <p style={{ top: '138%', left: '10%' }} class="htmltags">&lt;/ul&gt;</p>
        <p style={{ top: '145%', left: '5%' }} class="htmltags">&lt;/body&gt;</p>

        <div className="skillsTitle">What I'm good at :</div>
        <div class="skills" style={{ left: '12%', top: '55%' }}>
          <p className="list">FRONT-END</p>
          <ul>
            <li><span class="html5"></span><em>HTML</em></li>
            <li><span class="css3"></span><em>CSS</em></li>
            <li><span class="js"></span><em>Javascript</em></li>
            <li><span class="jquery"></span><em>jQuery</em></li>
            <li><span class="react"></span><em>React JS</em></li>
          </ul>
        </div>
        <div class="skills" style={{ left: '41%', top: '47.9%' }}>
          <p className="list">FRAMEWORKS</p>
          <ul>
            <li><span class="wordpress"></span><em>Wordpress CMS</em></li>
            <li><span class="bootstrap"></span><em>Bootstrap</em></li>
            <li><span class="material"></span><em>Material-UI</em></li>

          </ul>
        </div>
        <div class="skills" style={{ left: '70%', top: '44.2%' }}>
          <p className="list">IDEs</p>
          <ul>
            <li><span class="as"></span><em>Android Studio</em></li>
            <li><span class="xcode"></span><em>X-code</em></li>
          </ul>
        </div >
        <div class="skills" style={{ left: '12%', top: '110%' }}>
          <p className="list">PROGRAMMING</p>
          <ul>
            <li><span class="cpp"></span><em>C/C++</em></li>
            <li><span class="java"></span><em>Java</em></li>
            <li><span class="python"></span><em>Python</em></li>
            <li><span class="logic"></span><em>Programming Logic</em></li>
            <li><span class="ds"></span><em>Data Structures</em></li>
            <li><span class="algo"></span><em>Algorithms</em></li>
          </ul>
        </div >
        <div class="skills" style={{ left: '41%', top: '95.4%' }}>
          <p className="list">MISCELLANEOUS</p>
          <ul>
            <li><span class="git"></span><em>Git</em></li>
            <li><span class="ml"></span><em>Machine Learning</em></li>

          </ul>
        </div >
      </div >
    )
  }
}

export default skills
