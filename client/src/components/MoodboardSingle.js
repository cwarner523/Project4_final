import React, { Component } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

class MoodboardSingle extends Component {
  constructor() {
    super();
    this.state = {
      moodboard: null,
      apiDataLoaded: false,
      currentPage: 'moodboards'
    }
  }

  componentDidMount() {
    console.log(this.moodboard.id);
    axios.get(`/moodboard/${this.state.moodboard.id}`)
    .then(res => {
      console.log(this.moodboard.id);
      this.setState({
        apidDataLoaded: true,
        moodboard: res.data.data,
      })
    }).catch(err => console.log(err));
  }

  renderMoodboard() {
    if(this.state.apiDataLoaded) {
      return (
        <div>
          <h1>{this.state.moodboard.name}</h1>
          <p>{this.state.moodboard.description}</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderMoodboard()}
      </div>
    )
  }
}

export default MoodboardSingle;
