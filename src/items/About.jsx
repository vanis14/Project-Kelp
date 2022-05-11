import React, { Component } from "react";
import pfp from '../assets/pfp.jpeg';

class About extends React.Component {
  render() {
    return (
      <div>
      <div><h1>About Us</h1></div>
        <div><img src={pfp} className="profilepic"/></div>
        <h2>Lim Hong Chun</h2>
        <section>
          <div>
            <h2 >Who am I?</h2>
            <p>I am currrently the only developer and project planner for this website, I am also a final year student in Business Information Systems at National College of Ireland,expected to graduate in May 2022. 
              I am also a part-time IT advisor and online retail team leader in family-owned business responsible 
              for  analyze sales report and provide opinions for daily retail, discount events and campaigns, 
              consult IT hardware upgrades, coordinate communication & host regular meetings between teams & departments, 
              and meets external IT services provider for solution and quotations.</p>

          </div>
        </section>

        <section>
          <div >

            <h2>Contact and Socials</h2>
            <p>Email: <a href="mailto:Vanislim14@gmail.com ">Vanislim14@gmail.com </a> 
              <br/> LinkedIn:  <a href="https://www.linkedin.com/in/lim-hong-chun/">https://www.linkedin.com/in/lim-hong-chun/</a>
            <br/> Appointment: <a href="https://outlook.office365.com/owa/calendar/ProjectKelp@studentncirl.onmicrosoft.com/bookings/ ">Make an Appointment with me to talk about the project!</a>
            </p>

          </div>
        </section>
        <section>
          <div >
            <h2>Github</h2>
            <p>Front End: <a href="https://github.com/vanis14/Project-Kelp.git">https://github.com/vanis14/Project-Kelp.git</a>
            <br/>Back End: <a href="https://github.com/vanis14/Project-Kelp-backend.git">https://github.com/vanis14/Project-Kelp-backend.git</a>
            </p>
          </div>
        </section>
      </div>
    )
  }
}



export default About;