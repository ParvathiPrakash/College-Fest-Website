import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const handleExploreClick = () => {
    // You can customize this logic based on your requirements
    // For now, it shows an alert and then navigates to the Events page after a short delay
    alert("Explore button clicked!");
    
    // Simulating a delay before navigating to the Events page
    setTimeout(() => {
      window.location.href = "/events"; // Change this to the desired destination
    }, 1000); // Adjust the delay time as needed
  };

  return (
    <div>
      <header>
        <Link to="/" className="logo">
          <img src="logo1.png" alt="logo1" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/concert">Concert</Link></li>
            <li><Link to="/announcements">Announcements</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <button className="explore-button" onClick={handleExploreClick}>
        Explore
      </button>
      <footer>
        © 2023 BYTEBeat Melange. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
