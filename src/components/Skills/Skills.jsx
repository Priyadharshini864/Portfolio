import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import skillsimage from './../../assets/skills_vector.png';
import mongodbimage from './../../assets/mongo_image.png';
import javaimage from './../../assets/java_image.png';
import htmlimage from './../../assets/Html_image.png';
import javascriptimage from './../../assets/javascript_image.png';
import reactimage from './../../assets/react_image.png';
import './Skills.css';
const Skills = () => {
     return (
          <div className='section-container'>
               <Header
                    heading='My Skills'
                    details='Developing new skills is better than developing Strength'
               />
               <div className='skill-card-container'>
                    <img title="MongoDb" src={mongodbimage} className='skill-image' alt='mongodbimage' />&nbsp;&nbsp;&nbsp;
                    <img src={javaimage} className='skill-image' alt='javaimage' />&nbsp;&nbsp;&nbsp;
                    <img src={htmlimage} className='skill-image' alt='htmlimage' />&nbsp;&nbsp;&nbsp;
                    <img src={javascriptimage} className='skill-image' alt='javascriptimage' />&nbsp;&nbsp;&nbsp;
                    <img src={reactimage} className='skill-image' alt='reactimage' />&nbsp;&nbsp;&nbsp;

               </div>
               <Footer phrase='Get in' link='touch' toAddress='./contact' />
               <div className='skills-vector'>
                    <img src={skillsimage} alt='Skills-vector' className='skills-frame' />
               </div>
          </div >
     );
};
export default Skills;