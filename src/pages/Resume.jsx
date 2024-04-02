import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import React from 'react';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import ApiIcon from '@mui/icons-material/Api';
import Grid from '@mui/material/Grid';
import '../../src/App.CSS';

const ProficiencyItem = ({ icon, text }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {icon}
    <span style={{ marginLeft: '8px' }}>{text}</span>
  </div>
);

export default function Resume() {
  const onButtonClick = () => {
    const pdfUrl = "/images/Cameron_Bursch_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Cameron_Bursch_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div>
        <Button style={{width: '400px', marginBottom: '100px'}} variant="contained" onClick={onButtonClick}>
          Download Resume
        </Button>
      </div>
      <div style={{textAlign: 'center'}}>
        <h2>Proficiencies</h2>
        <div style={{ paddingLeft: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ProficiencyItem icon={<HtmlIcon />} text="HTML" />
            </Grid>
            <Grid item xs={4}>
              <ProficiencyItem icon={<CssIcon />} text="CSS" />
            </Grid>
            <Grid item xs={4}>
              <ProficiencyItem icon={<JavascriptIcon />} text="JavaScript" />
            </Grid>
            <Grid item xs={4}>
              <ProficiencyItem icon={<ApiIcon />} text="APIs" />
            </Grid>
            <Grid item xs={4}>
              <ProficiencyItem text="Node.js & Express.js" />
            </Grid>
            <Grid item xs={4}>
              <ProficiencyItem text="OOP, ORM, MVC" />
            </Grid>
            <Grid item xs={4}>
              <ProficiencyItem text="SQL & NoSQL" />
            </Grid>
            <Grid item xs={4}>
              <ProficiencyItem text="MongoDB & GraphQL" />
            </Grid>
            <Grid item xs={4}>
              <ProficiencyItem text="PWA" />
            </Grid>
            <Grid item xs={4}>
              <ProficiencyItem text="React" />
            </Grid>
            <Grid item xs={4}>
              <ProficiencyItem text="MERN & Stat" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}