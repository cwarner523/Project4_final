import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Moodboard = (props) => {
  return (
    <div className="moodboard-wrapper">
      <div className="moodboard-indiv">
        <h1>{props.moodboard.name}</h1>
        <p>{props.moodboard.description}</p>
        <Link to={`/moodboard/${props.moodboard.id}`}>See Mood Board </Link>
        <form onSubmit={() => this.props.deleteMoodboard}>
          <input type="submit" value="Delete" />
        </form>
      </div>
    </div>
  )
}

export default Moodboard;

/*
<div className="form-wrapper">
  <form onSubmit={(e) => this.props.handleMoodboardSubmit(e)}>
    <label> Name
      <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
    </label>
    <label> Description
      <input type="text" name="desc" value={this.state.desc} onChange={this.handleInputChange} />
    </label>
    <input type="submit" value="Add Mood Board" />
  </form>
</div>
*/
