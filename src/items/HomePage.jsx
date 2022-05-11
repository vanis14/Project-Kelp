import React, { Component } from "react";
import banner from '../assets/Banner.jpg';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <br />
                    <div><img src={banner} /></div>
                </section>
                <section>
                    <h2>Web application developed with retail SMEs in mind </h2>

                    <p>
                        Project Kelp is an introduction application to complex business information systems for traditional small and medium-sized enterprises (SMEs). 
                        Traditional SMEs commonly facing cost difficulties when transitioning towards modern information systems especially in the training cost of the employees. 
                        This project provides a solution by offering a web-based application for an inventory management system with easy-to-use graphical user interface which has 
                        a low learning curve and low hardware requirement. 
                    </p>

                    
                </section>

                <section>

                    <h2>Easy to use and light weight </h2>
                    <p>
                        Project Kelp designed with simple GUI and self-explaining buttons to avoid confusion to the user.
                        The website is easy to run as it does not require local installation onto device and can be simply be run on most browsers.
                        The aim of the website is to make sure user able to understand and operate the basic function instantly without much training needed.
                        </p>
                </section>

                <section>
                    <h2>High Expandability</h2>
                    <p>
                    The project contains possibility of expanding into a complete Enterprise Resource Planning system (ERP) in the future, along with some useful small features like file sharing and timetable tools.
                    
                    </p>
                </section>

                <section>
                    <h2>Technology Used</h2>
                    <p>
                    HTML, CSS, JavaScript, React.JS, Strapi, Redux, GraphQL, Google Firebase 
                    
                    </p>
                </section>
            </div>

        )
    }
}



export default Homepage;