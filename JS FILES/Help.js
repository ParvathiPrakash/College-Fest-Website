// Help.js
import React from 'react';

const Help = () => (
  <div>
    <nav>
      <ul>
       
        <li><a href="Announcements.html">Announcements</a></li>
        <li><a href="Help.html">Help</a></li>
        <li><a href="Team.html">Team</a></li>
        <li><a href="VolunteerForm.html">VolunteerForm</a></li>
      </ul>
    </nav>

    <header>
      <h1>Byte Beat Melange - Help</h1>
    </header>

    <main>
      {/* Add content for the Help page as needed */}
    </main>
    <footer>
      <p>&copy; 2023 Byte Beat Melange. All rights reserved.</p>
      <ul className="social-icons">
        <li><a href="#" target="_blank"><img src="instagram-icon.png" alt="Instagram" /></a></li>
        {/* Add more social media icons as needed */}
      </ul>
    </footer>
  </div>
);

export default Help;
