import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.css';
class NavBar extends React.Component {
     render() {
          const { location } = this.props;
          console.log(location);
          const homeClass = location.pathname === '/' ? 'active-item' : '';
          const aboutClass = location.pathname === '/About' ? 'active-item' : '';
          const projectsClass = location.pathname === '/Projects' ? 'active-item' : '';
          const skillsClass = location.pathname === '/Skills' ? 'active-item' : '';
          const ContactClass = location.pathname === '/Contact' ? 'active-item' : '';
          return (

               <Menu>
                    <Link to="/" className={`menu-item ${homeClass}`} >Home</Link>
                    <Link to="/About" className={`menu-item ${aboutClass}`}>About</Link>
                    <Link to="/Projects" className={`menu-item ${projectsClass}`}>Projects</Link>
                    <Link to="/Skills" className={`menu-item ${skillsClass}`}>Skills</Link>
                    <Link to="/Contact" className={`menu-item ${ContactClass}`}>Contact</Link>
               </Menu>
          );
     }
};
export default withRouter(NavBar);