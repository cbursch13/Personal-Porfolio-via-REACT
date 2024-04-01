import profilePicture from '/images/profilePicture.jpg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';

export default function About() {
  const aboutMeContainer = {
    marginTop: '100px', // Adjust this value as needed
    marginBottom: '50px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    maxWidth: '600px', // Adjust this value as needed
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <div style={aboutMeContainer}>
      <h1>About Me</h1>
      <img
        src={profilePicture}
        alt="Profile Picture of Cameron Bursch"
        style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px' }}
      />
      <p>
        Strategy Lead by day, coding connoisseur by night, and all-around outdoor enthusiast. When I'm not crafting
        innovative strategies at Target, you'll find me immersed in the world of coding, unraveling the mysteries of
        algorithms like a digital Sherlock Holmes. With a penchant for sports and a love for analytics, I'm the MVP of
        dissecting game stats and uncovering hidden patterns. Outside the digital realm, you'll catch me basking in the
        sunshine with my fiancé and trusty golden retriever, or cheering on my favorite teams with an analytical eye.
        Let's connect the dots, both on and off the field!
      </p>
    </div>
  );
}
