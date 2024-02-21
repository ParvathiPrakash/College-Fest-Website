import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="ribbon"></div>

      <header>
        <Link to="#" className="logo">
          <img src="logo2.png" alt="logo2" />
          <p className="logo-description">
            BYTEbeat Melange is a grand event where you can experience the fusion of technology and art. ByteBeat Melange is more than an event; it is a celebration of the limitless potential of human creativity, where the language of technology becomes a symphony for the senses, leaving an indelible mark on the canvas of innovation and artistic expression.
          </p>
        </Link>
        <nav>
          <ul>
            <li><Link to="P1.html">Home</Link></li>
            <li><Link to="P2_ABOUT.html">About</Link></li>
            <li><Link to="P3_EVENTS.html">Events</Link></li>
            <li><Link to="P4_CONCERT.html">Concert</Link></li>
            <li><Link to="#announcements">Announcements</Link></li>
            <li><Link to="#team">Team</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <footer>
        &copy; 2023 BYTEBeat Melange. All rights reserved.
      </footer>
    </div>
  );
}

export default About;
