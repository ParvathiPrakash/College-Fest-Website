// Team.js
import React from 'react';

const Team = () => (
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
      <h1>Byte Beat Melange - Organizing Team</h1>
    </header>

    <main>
      <section className="team-member">
        <h2>A</h2>
        <p className="domain head">Head of the Fest</p>
        <p>Details about the responsibilities and introduction of Alex Johnson.</p>
      </section>

      <section className="team-member">
        <h2>B</h2>
        <p className="domain">Event Management</p>
        <p>Details about the responsibilities and introduction of John Doe.</p>
      </section>

      <section className="team-member">
        <h2>C</h2>
        <p className="domain">Public Relations</p>
        <p>Details about the responsibilities and introduction of Jane Smith.</p>
      </section>

      <section className="team-member">
        <h2>D</h2>
        <p className="domain">Marketing & Promotion</p>
        <p>Details about the responsibilities and introduction of Sarah Adams.</p>
      </section>

      <section className="team-member">
        <h2>E</h2>
        <p className="domain">Finance & Sponsorship</p>
        <p>Details about the responsibilities and introduction of David Brown.</p>
      </section>

      <section className="team-member">
        <h2>F</h2>
        <p className="domain">Logistics & Operations</p>
        <p>Details about the responsibilities and introduction of Emily Clark.</p>
      </section>

      <section className="team-member">
        <h2>G</h2>
        <p className="domain">Technical Support</p>
        <p>Details about the responsibilities and introduction of Michael Evans.</p>
      </section>

      {/* Add more team members and domains as needed */}
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

export default Team;
