// VolunteerForm.js
import React from 'react';

const VolunteerForm = () => (
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
      <h1>Volunteers</h1>
    </header>

    <main>
      <div className="volunteer-form">
        <h2>Sign Up as a Volunteer</h2>
        <p>Wanna be a part of our amazing event!? Fill out the form below to sign up as a volunteer!</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <select name="domain" required>
            <option value="" disabled selected>Select your domain</option>
            <option value="Event Management">Event Management</option>
            <option value="Public Relations">Public Relations</option>
            <option value="Marketing & Promotion">Marketing & Promotion</option>
            <option value="Finance & Sponsorship">Finance & Sponsorship</option>
            <option value="Logistics & Operations">Logistics & Operations</option>
          </select>
          <p>Semester:</p>
          <label><input type="radio" name="semester" value="1" required /> 1st Sem</label>
          <label><input type="radio" name="semester" value="3" required /> 3rd Sem</label>
          <label><input type="radio" name="semester" value="5" required /> 5th Sem</label>
          <textarea placeholder="Tell us why you want to be a volunteer and speak about your previous experiences of being a volunteer" rows="4" required></textarea>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
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

export default VolunteerForm;
