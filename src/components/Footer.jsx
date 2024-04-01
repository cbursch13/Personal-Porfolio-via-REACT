import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../src/App.css';

export default function Footer() {
  return (
    <footer className="footer">
      <ButtonGroup variant="text" color="primary" aria-label="footer links">
        <Button href="https://github.com/cbursch13" target="_blank" rel="noopener noreferrer"><GitHubIcon /></Button>
        <Button href="https://www.linkedin.com/in/cameron-bursch-a3028590/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></Button>
        <Button href="https://www.instagram.com/cameron_bursch/?igsh=amx0ZHdoNGZmanJp&utm_source=qre" target="_blank" rel="noopener noreferrer"><InstagramIcon /></Button>
      </ButtonGroup>
    </footer>
  );
};

