import React from 'react';
import homepageimage from './../../assets/home_anime.gif';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
     return (
          <div className="home-container">
               <div className="header-text">
                    <h1>Welcome to my page</h1>
                    <p>This is Priyadharshini FrontEnd developer</p>
               </div>
               <div className="button">
                    <Link to='/about' className="btn btn-white">
                         <p className="btn-text">Know more about me</p></Link>
                    <Link to='/Contact' className="btn btn-transparent">
                         <p className='btn-text'>Contact me</p>
                    </Link>
               </div>
               <div className="splash-image">
                    <img src={homepageimage} alt='animation' className='home-anime' />
               </div>
          </div>
     );
};
export default Home;