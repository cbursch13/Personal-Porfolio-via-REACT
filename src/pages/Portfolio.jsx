import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Portfolio() {
  const projects = [
    {
      title: 'Winning Edge',
      imageUrl: '/images/Winning_Edge.png',
      deployedLink: 'https://pacific-shelf-77218-ba08c8175600.herokuapp.com/',
      githubLink: 'https://github.com/adamboudruh/Group-1-Winning-Edge',
    },
    {
      title: 'Flavor Fusion',
      imageUrl: '/images/Flavor_Fusion.png',
      deployedLink: 'https://somphangchanleuxay.github.io/FlavorFusion/',
      githubLink: 'https://github.com/somphangchanleuxay/FlavorFusion',
    },
    {
      title: 'Weather Tracker',
      imageUrl: '/images/Weather_Tracker.png',
      deployedLink: 'https://cbursch13.github.io/Weather-Tracker/',
      githubLink: 'https://github.com/cbursch13/Weather-Tracker',
    },
    {
      title: 'Personal Work Day Scheduler',
      imageUrl: '/images/Personal_Workday_Scheduler.png',
      deployedLink: 'https://cbursch13.github.io/Personal-Work-Day-Scheduler/',
      githubLink: 'https://github.com/cbursch13/Personal-Work-Day-Scheduler',
    },
    {
      title: 'Note Taker',
      imageUrl: '/images/Note_Taker.png',
      deployedLink: 'https://camnote-taker-58d580522770.herokuapp.com/',
      githubLink: 'https://github.com/cbursch13/Note-Taker',
    },
    {
      title: 'Text Editor',
      imageUrl: '/images/Text_Editor.png',
      deployedLink: 'https://text-editor-i8rm.onrender.com',
      githubLink: 'https://github.com/cbursch13/Text-Editor',
    },
  ];

  return (
    <div className="projects" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyContent: 'center' }}>
      {projects.map((project, index) => (
        <div key={index} className="project-card" style={{ width: '300px' }}>
          <Card style={{ height: '100%' }}>
            <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {project.title}
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button size="small" href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</Button>
            </CardActions>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button size="small" href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
