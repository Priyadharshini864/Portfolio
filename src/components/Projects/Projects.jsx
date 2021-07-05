import React from 'react';
import './Projects.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { projectsData } from './../../assets/projectsData';
import ProjectsCard from './ProjectsCard';
const Projects = () => {
     return (
          <div className='section-container'>
               <Header
                    heading='My Projects'
                    details='Here are my cool Projects! Check out'
               />
               <div className='project-card-container'>
                    {projectsData.map(({ projectName, projectDescription, imageUrl }) => {
                         return <ProjectsCard projectName={projectName}
                              projectDescription={projectDescription}
                              imageUrl={imageUrl} />
                    })}
               </div>
               <Footer phrase='Check out' link='Skills' toAddress='./Skills' />
          </div>
     );
};
export default Projects;