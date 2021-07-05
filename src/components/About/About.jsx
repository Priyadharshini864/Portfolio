import React from 'react';
import Header from '../Header/Header';
import './About.css';
import aboutanime from './../../assets/about_anime.gif';
import Footer from '../Footer/Footer';
import vectorimage from './../../assets/about_vector.png'
const About = () => {
     return (
          <div className='section-container'>
               <Header
                    heading='About Me'
                    details='Front-End developer | Coding Enthusiast  ' />
               <div className='about-main'>
                    <div className='about-left'>
                         <h3 className='Student'>Student</h3>
                         <p className='student-details'>I have Completed Bachelor of Engineering in computer science.
                              I have also completed NPTEL courses.</p>
                         <h3 className='Front-end Developer'>Front-end Developer</h3>
                         <p className='Developer-details'>I have Completed a course in front end development.
                              I have also done lot of projects in web development. I am good at making quite cool designs
                              and well versed in implementing it with ReactJs and with Styling Sheets </p>
                         <h3 className='Goals'>Goals</h3>
                         <p className='Goal-details'>I want to secure an employment with a reputable company that
                              would enhance my knowledge and business studies background to the maximum.</p>
                    </div>
                    <div className='about-right'>
                         <img src={aboutanime} className="about-anime" alt='about-anime' />
                    </div>
               </div>
               <Footer
                    phrase='CHECK MY PROJECTS '
                    link='Projects'
                    toAddress='./Projects' />
               <div className='vector-frame'>
                    <img src={vectorimage} className='about-vector' alt='Vector-pic' />
               </div>
          </div>
     );
};
export default About;