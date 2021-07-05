import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import skillsimage from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import LinkedIn from './../../assets/li.png';
import Instagram from './../../assets/in.png';
const Contact = () => {
     return (
          <div className='section-container'>
               <Header
                    heading='Connect With Me'
                    details='Feel free to colloborate with me'
               />
               <div className='contact-form-container'>
                    <form className='contact-form'
                         action="https://formspree.io/f/mzbyvoaw"
                         method="POST"
                    >
                         <input
                              type='email'
                              placeholder='Your Email'
                              name='_replyto'
                              className='input-box email-input'
                         />
                         <textarea
                              type='text'
                              placeholder='Your message'
                              name='message'
                              className='input-box body-input'
                         ></textarea>
                         <button type='submit' className='contact-btn'>Send Email</button>
                    </form>
               </div>
               <div className='Social-icon-container'>
                    <a href='https://github.com/Priyadharshini864'>
                         <img src={github} className='social-icon' alt='github' />
                    </a>
                    <a href='https://www.linkedin.com/in/priya-dharshini-587804198'>
                         <img src={LinkedIn} className='social-icon' alt='LinkedIn' />
                    </a>
                    <a href='https://www.instagram.com/priya_jenani_/'>
                         <img src={Instagram} className='social-icon' alt='Instagram' />
                    </a>
               </div>
               <div className='vector-frame'>
                    <img src={skillsimage} className='about-vector' alt='Vector-pic' />
               </div>
               <Footer phrase='Read more' link='About' toAddress='./About' />

          </div>
     );
};
export default Contact;