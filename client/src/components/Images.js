import React, { Component } from 'react';

class Images extends Component {
  render() {
    return (
      <div className="image-section">
          <div className="image-indiv">
            <img src={this.props.image}></img>
            <div className="image-descrip">
              <p>Photo By {this.props.name} | Unsplash</p>
              <a href={this.props.link}>{this.props.link}</a>
            </div>
          </div>
      </div>
    )
  }
}

export default Images;

/*
<div>
{
  this.props.apiData.map((image)=> {
    <div>
      <img src='image.image'></img>
      <p>image.name</p>
      <p>image.link</p>
    </div>
  })
}
</div>
*/