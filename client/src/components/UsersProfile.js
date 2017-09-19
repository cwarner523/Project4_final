import React from 'react';

import Moodboard from './Moodboard';
import MoodboardAddForm from './MoodboardAddForm';

const UsersProfile = (props) => {
  return (
    <div className="wrapper">
      <MoodboardAddForm handleMoodboardSubmit={props.handleMoodboardSubmit} />
      {props.moodboardData.map(moodboard => {
        return <Moodboard moodboard={moodboard} key={moodboard.id} />
      })}
    </div>
  )
}

export default UsersProfile;
