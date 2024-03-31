import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Footer() {
    return (
      <footer>
        <ButtonGroup variant="text" color="primary" aria-label="footer links">
          <Button href="https://github.com/cbursch13" target="_blank" rel="noopener noreferrer">GitHub</Button>
          <Button href="https://www.linkedin.com/in/cameron-bursch-a3028590/" target="_blank" rel="noopener noreferrer">LinkedIn</Button>
          <Button href="https://www.instagram.com/cameron_bursch/?igsh=amx0ZHdoNGZmanJp&utm_source=qre" target="_blank" rel="noopener noreferrer">Instagram</Button>
        </ButtonGroup>
      </footer>
    );
  };

