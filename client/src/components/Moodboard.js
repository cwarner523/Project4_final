import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Moodboard = (props) => {
  return (
    <div className="image-section">
      <h1>{props.moodboard.name}</h1>
      <h4>{props.moodboard.description}</h4>
      <Link to={`/moodboard/${props.moodboard.id}`}>See Mood Board </Link>
    </div>
  )
}

export default Moodboard;
