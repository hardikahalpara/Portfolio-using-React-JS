import React, { Component } from 'react'
import './css/project.css'

export class project extends Component {
  render() {
    return (
      <div>
        <p style={{ top: '5%', left: '5%' }} class="htmltags">&lt;body&gt;</p>
        <p style={{ top: '10%', left: '10%' }} class="htmltags">&lt;h1&gt;</p>
        <p style={{ top: '17.5%', left: '40%' }} class="htmltags">&lt;!--click on any project tile to know more about it--&gt;</p>
        <p style={{ top: '17.5%', left: '24%' }} class="htmltags">&lt;/h1&gt;</p>
        <p style={{ top: '26%', left: '10%' }} class="htmltags">&lt;section&gt;</p>
        <p style={{ top: '105%', left: '67%' }} class="htmltags">&lt;/section&gt;</p>
        <p style={{ top: '120%', left: '5%' }} class="htmltags">&lt;/body&gt;</p>
        <div className="skillsTitle">Projects:</div>
        <article class="flashcard" id="flashcarddiv-1" style={{ top: '45%', left: '12%' }}>
          <input id="flashcard-1" type="checkbox" />
          <label for="flashcard-1">
            <section class="front">
              <div style={{ color: 'white', fontSize: '35px', fontFamily: 'Lobster', marginTop: '35%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)' }}>Swachh-Bin</div>
              <div style={{ color: '#08FDD8', fontSize: '12px', marginTop: '-15px' }}>NATIVE ANDROID APP</div>
            </section>
            <section class="back">
              <div className="flashback">THROUGH THIS ANDROID APP, THE VEGETABLE WASTE COLLECTED AT A CENTRALIZED LOCATION BY MUNICIPAL CORPORATION CAN BE ORDERED BY SHEPHERDS AND THE ANIMAL WASTE AND OTHER ORGANIC WASTE CAN BE ORDERED BY FARMERS TO USE IT AS A FERTILIZING PRODUCT.</div>
            </section>
          </label>
        </article>
        <article class="flashcard" id="flashcarddiv-2" style={{ top: '45%', left: '41%' }}>
          <input id="flashcard-2" type="checkbox" />
          <label for="flashcard-2">
            <section class="front">
              <div className="flashfront">The Chatter Court</div>
              <div style={{ color: '#08FDD8', fontSize: '12px', marginTop: '-15px' }}>WORDPRESS CMS WEBSITE</div>
            </section>
            <section class="back">
              <div className="flashback">THIS WEBSITE BASICALLY AIMS TO MANAGE AND ORGANIZE OPEN MIC EVENTS AND INFORMAL MEET UPS IN THE TOWN. THIS WEBSITE HELPS ORGANIZERS TO POST THEIR EVENTS AND ATTENDANTS TO VIEW UPCOMING EVENTS IN THEIR TOWN.</div>
            </section>
          </label>
        </article>
        <article class="flashcard" id="flashcarddiv-3" style={{ top: '45%', left: '70%' }}>
          <input id="flashcard-3" type="checkbox" />
          <label for="flashcard-3">
            <section class="front">
              <div className="flashfront">Sky region Detection</div>
              <div style={{ color: '#08FDD8', fontSize: '12px', marginTop: '-15px' }}>AN APPROACH - COMPUTER VISION</div>
            </section>
            <section class="back">
              <div className="flashback">WE HANDED OVER AN APPROACH TO GENERATE AN MASKED IMAGE OF A GIVEN INPUT IMAGE WITH DETECTED SKY REGION, THROUGH THIS IMAGE AND STUDYING CAMERA OPTICS, WE CAN CALCULATE THE ANGLE OF ELEVATION FROM THE LOWEST SKY PIXEL WHICH IS AN IMPORTANT ASPECT IN PREDICTING SOLAR ENERGY POTENTIAL AT ANY URBAN SETTING.</div>
            </section>
          </label>
        </article>
        <article class="flashcard" id="flashcarddiv-4" style={{ top: '90%', left: '12%' }}>
          <input id="flashcard-4" type="checkbox" />
          <label for="flashcard-4">
            <section class="front">
              <div className="flashfront">Language Translator</div>
              <div style={{ color: '#08FDD8', fontSize: '12px', marginTop: '-15px' }}>PYTHON - TKINTER GUI MODULE</div>
            </section>
            <section class="back">
              <div className="flashback">CREATED A HANDY LANGUAGE TRANSLATOR USING PYTHON PROGRAMMING LANGUAGE AND TKINTER GUI MODULE. USED GOOGLE TRANSLATOR API SUPPORT.</div>
            </section>
          </label>
        </article>
        <article class="flashcard" id="flashcarddiv-5" style={{ top: '90%', left: '41%' }}>
          <input id="flashcard-5" type="checkbox" />
          <label for="flashcard-5">
            <section class="front">
              <div className="flashfront">Developer Portfolio</div>
              <div style={{ color: '#08FDD8', fontSize: '12px', marginTop: '-15px' }}>REACT JS , CUSTOM CSS COMPONENTS</div>
            </section>
            <section class="back">
              <div className="flashback">THIS IS NOTHING BUT THE THING YOU ARE LOOKING AT RIGHT NOW. THIS PORTFOLIO IS CREATED USING REACT JS AND FEW CUSTOM CSS COMPONENTS. THANK YOU FOR HAVING A LOOK.</div>
            </section>
          </label>
        </article>
        <div className="skillsTitle" id="dummy" style={{ top: '110%', visibility: 'hidden' }}>.</div>



      </div >
    )
  }
}

export default project
