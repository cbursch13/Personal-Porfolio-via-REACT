import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import React from 'react';

export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
        <div>
        <Button 
          variant="contained" 
          href="/images/Cameron_Bursch_Resume.pdf" 
          download
          target="_blank" 
          rel="noopener noreferrer">
          Download
        </Button>
      </div>
        <h2>Proficiences</h2>
        <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>APIs (Web, Server, 3rd Party)</li>
            <li>Node.js & Express.js</li>
            <li>OOP, ORM, MVC</li>
            <li>SQL & NoSQL</li>
            <li>MongoDB & GraphQL</li>
            <li>PWA</li>
            <li>REACT</li>
            <li>MERN & State</li>

        </ul>
      </div>
    );
  }