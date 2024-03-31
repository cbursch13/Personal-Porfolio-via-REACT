// import github_icon from "../images/github_icon.png";
// import linkedIn_icon from "../images/linkedin_icon.png";
// import email_icon from "../images/email_icon.png";
// import pdfIcon from "../images/PDF_icon.png";
// import Resume from "../images/Cameron_Bursch_Resume.pdf";

// export default function Contact(props) {
//   return (
//     <div className="moreLeft">
//       <h1>Contact Me</h1>
//     <p>Feel free to reach out! I look forward to connecting with you.</p>
//    <p><img className="contactImg" src={ pdfIcon } alt="github icon" /><a className="contactLink" href={Resume}>Click here to download my resume</a></p>
//     <img className="contactImg" src={ github_icon } alt="github icon" /><a className="contactLink" href="https://github.com/cbursch13" target="_blank" rel="noreferrer"> Github</a><br/>
//     <img className="contactImg" src={ linkedIn_icon } alt="linkedIn icon" /><a className="contactLink" href="https://www.linkedin.com/in/cameron-bursch-a3028590/" target="_blank" rel="noreferrer"> LinkedIn</a><br/>
//     <img className="contactImg" src={ email_icon } alt="email icon" /><a className="contactLink" href="mailto:cammichbursc@gmail.com">Email me</a>
//     <p>&nbsp;</p>
//     <p>&nbsp;</p>
//     <p>&nbsp;</p>
//     </div>
//   );
// }

import React, { useState } from 'react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(e.target.value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <span>{nameError}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <span>{emailError}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactSection;
