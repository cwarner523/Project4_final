import React, { Component } from 'react';

import Images from './Images';
import axios from 'axios';

const API_KEY = 'ba36fb6c5c0bada18b969e17ce9863067e75507abbc0a3af0dbdd201ef0ad080';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
      apiDataLoaded:false,
    }
  }


    componentDidMount() {
      axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}`)
        .then(res => {
          console.log(res.data)
          const images = res.data;
          this.setState({
              apiData:images,
              apiDataLoaded:true
            });
          });
    }

    getImagesBySearch(search) {
      axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${search}`)
        .then(res => {
          console.log('new' + res.data)
          const images = res.data;
          this.setState({
              apiData:images,
              apiDataLoaded:true,
            });
          });
    }


    renderImages() {
      if(this.state.apiDataLoaded)
        return (
          <div className="image-wrapper">
          {
            this.state.apiData.map(data=>{
            return(
              <Images image={data.urls.regular} name={data.user.name} link={data.user.links.html}/>
              )
            })
          }
          </div>
        )
      else
        return <p> Loading ... </p>
    }



  render() {
    return(
      <div>
        {this.renderImages()}
      </div>
    )
  }
}

export default Main;
