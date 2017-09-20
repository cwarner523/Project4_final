
import React from 'react';

import Moodboard from './Moodboard';
import MoodboardAddForm from './MoodboardAddForm';

const UsersProfile = (props) => {
  return (
    <div className="wrapper">
      <MoodboardAddForm handleMoodboardSubmit={props.handleMoodboardSubmit} />
      {props.moodboardData.map(moodboard => {
        return <Moodboard moodboard={moodboard} key={moodboard.id} deleteMoodboard={props.deleteMoodboard}/>
      })}
    </div>
  )
}

export default UsersProfile;

/*
import React, { Component } from 'react';

import axios from 'axios';

import Moodboard from './Moodboard';

class UsersProfile extends Component {
  constructor() {
    super();
    this.state = {
      moodboardDataLoaded: false,
      moodboardData: null
    }
  }

  componentDidMount() {
    axios.get(`/moodboard/${this.state.moodboardData.id}`)
    .then(res => {
      this.setState({
        moodboardDataLoaded: true,
        moodboardData: res.data.data,
      })
    })
  }

  renderMoodboard() {
    if (this.state.moodboardDataLoaded) {
      return this.state.moodboardData.map(moodboard => {
        return (
          <MoodboardSingle />
        )
      })
    }
  }
}
*/
