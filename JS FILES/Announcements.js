// Announcements.js
import React from 'react';

const Announcements = () => (
  <div>
    <nav>
      <ul>

        <li><a href="Announcements.html">Announcements</a></li>
        <li><a href="Team.html">Team</a></li>
        <li><a href="Help.html">Help</a></li>
        <li><a href="VolunteerForm.html">VolunteerForm</a></li>
      </ul>
    </nav>

    <header>
      <h1>Byte Beat Melange - Announcements</h1>
    </header>

    <main>
      <section className="announcement">
        <h2 style={{ backgroundColor: '#b4a0c9', padding: '8px', borderRadius: '4px' }}>Important Announcement 1</h2>
        <p>Details about the important announcement...</p>
      </section>

      <section className="announcement">
        <h2 style={{ backgroundColor: '#b4a0c9', padding: '8px', borderRadius: '4px' }}>Important Announcement 2</h2>
        <p>Details about the second important announcement...</p>
      </section>

      <section className="announcement">
        <h2 style={{ backgroundColor: '#b4a0c9', padding: '8px', borderRadius: '4px' }}>Special Event Coming Up</h2>
        <p>Join us for a special event, more details soon...</p>
      </section>

      <section className="announcement">
        <h2 style={{ backgroundColor: '#b4a0c9', padding: '8px', borderRadius: '4px' }}>Workshops Schedule</h2>
        <p>Check out the schedule for various workshops...</p>
      </section>
      {/* Add more announcements as needed */}
    </main>

    <footer>
      <p>&copy; 2023 Byte Beat Melange. All rights reserved.</p>
      <ul className="social-icons">
        <li><a href="#" target="_blank"><img src="instagram-icon.png" alt="Instagram"></img></a></li>
        {/* Add more social media icons as needed */}
      </ul>
    </footer>
  </div>
);

export default Announcements;
