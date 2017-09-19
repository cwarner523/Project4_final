import React from 'react';


const Moodboard = (props) => {
  return (
    <div className="image-section">
      <h1>{props.moodboard.name}</h1>
      <h4>{props.moodboard.description}</h4>
    </div>
  )
}

export default Moodboard;
