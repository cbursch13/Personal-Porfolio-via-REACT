import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Winning Edge - a Sports Betting & Odds Website',
      imageUrl: 'project1.jpg',
      deployedLink: 'https://pacific-shelf-77218-ba08c8175600.herokuapp.com/',
      githubLink: 'https://github.com/adamboudruh/Group-1-Winning-Edge',
    },
    {
      title: 'Food Fusion - A Recipe and Nutrition Helper',
      imageUrl: 'project2.jpg',
      deployedLink: 'https://somphangchanleuxay.github.io/FlavorFusion/',
      githubLink: 'https://github.com/somphangchanleuxay/FlavorFusion',
    },
    {
      title: 'Weather Tracker',
      imageUrl: 'project2.jpg',
      deployedLink: 'https://cbursch13.github.io/Weather-Tracker/',
      githubLink: 'https://github.com/cbursch13/Weather-Tracker',
    },
    {
      title: 'Personal Work Day Scheduler',
      imageUrl: 'project2.jpg',
      deployedLink: 'https://cbursch13.github.io/Personal-Work-Day-Scheduler/',
      githubLink: 'https://github.com/cbursch13/Personal-Work-Day-Scheduler',
    },
    {
      title: 'Note Taker',
      imageUrl: 'project2.jpg',
      deployedLink: 'https://camnote-taker-58d580522770.herokuapp.com/',
      githubLink: 'https://github.com/cbursch13/Note-Taker',
    },
    {
      title: 'Text Editor',
      imageUrl: 'project2.jpg',
      deployedLink: 'https://text-editor-i8rm.onrender.com',
      githubLink: 'https://github.com/cbursch13/Text-Editor',
    },
  ];

  return (
    <div>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} />
            <div className="links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

