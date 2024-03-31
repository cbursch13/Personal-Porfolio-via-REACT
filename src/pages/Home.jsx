import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                <Link to="/">Home</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of Page 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                <Link to="/About">About Me</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of Page 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                <Link to="/Portfolio">Portfolio</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of Page 3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                <Link to="/Contact">Contact</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of Page 4
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                <Link to="/Resume">Resume</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of Page 4
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};