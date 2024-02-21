import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setModalOpen(false);
  };

  const eventsData = [
    { id: 'labyrinth', name: 'Labyrinth', category: 'technical' },
    { id: 'techTrek', name: 'Tech Trek', category: 'technical' },
    // Add more events as needed
  ];

  const filterEventsByCategory = (category) => {
    return eventsData.filter((event) => event.category === category);
  };

  return (
    <div>
      {/* Category slider */}
      <div className="category-slider">
        <button onClick={() => openModal(filterEventsByCategory('technical')[0])}>
          TECHNICAL
        </button>
        {/* Add more category buttons as needed */}
      </div>

      {/* Event cards */}
      {eventsData.map((event) => (
        <div
          key={event.id}
          className="event"
          data-category={event.category}
          data-id={event.id} 
          onClick={() => openModal(event)}
        >
          {/* Display event details on the card */}
          <h3>{event.name}</h3>
        </div>
      ))}

      {/* Event modal */}
      {modalOpen && selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <h2>Event Details - {selectedEvent.name}</h2>
            {/* Add event details here */}
            <p>Description: Add your event description here.</p>
            <p>Date: Add your event date here.</p>
            {/* Add more event details as needed */}
            <button onClick={closeModal}>Close</button>
            <button className="register" onClick={() => registerNow(selectedEvent.id)}>
              Register Now
            </button>
          </div>
        </div>
      )}

      {/* Navigation using Link component */}
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/concert">Concert</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Events;
