import React from 'react';
import './Projects.css';
const ProjectsCard = ({
     projectName, projectDescription, imageUrl }) => {
     return (
          <div className='project-card'>
               <div className='image-container'>
                    <img src={imageUrl} className='project-image' alt='projectimage' />
               </div>
               <div className='project-details-container'>
                    <h2 className='project-heading'>{projectName}</h2>
                    <p className='project-description'>{projectDescription}</p>
               </div>

          </div>
     );
}
export default ProjectsCard;