import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import Events from './events';
import Concert from './concert';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/concert" component={Concert} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
};

export default App;
