import React, { Component } from 'react';

class MoodboardAddForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      desc: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
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
    )
  }
}

export default MoodboardAddForm;
