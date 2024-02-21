import React from 'react';
import { Link } from 'react-router-dom';

const Concert = () => {
  return (
    <>
      <video autoPlay muted loop>
        <source src="/images/video (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="ribbon"></div>

      <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/concert">Concert</Link></li>
            <li><Link to="/announcements">Announcements</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="concert-container">
        <div className="concert-info">
          <div className="concert-title">Electrifying Concert Experience</div>
          <div className="concert-description">
            Join us for an unforgettable night of music and entertainment. Experience the energy and excitement
            as talented artists take the stage to create magical moments.
          </div>
          <a href="https://payment-gateway.com" className="register-button">Register Now</a>
        </div>
      </div>

      <footer>
        &copy; 2023 BYTEBeat Melange. All rights reserved.
      </footer>
    </>
  );
};

export default Concert;
