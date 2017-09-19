import React, { Component } from 'react';

import Images from './Images';
import axios from 'axios';
import SearchBar from './SearchBar';


const API_KEY = 'ba36fb6c5c0bada18b969e17ce9863067e75507abbc0a3af0dbdd201ef0ad080';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
      apiDataLoaded:false,
      search:'',
      searchDataLoaded: false,
      searchData: [],
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.inputSearch = this.inputSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${this.state.search}`)
    .then(res => {
      console.log(res.data + "dhfjdshfdks");
      console.log(this.state.searchData);
      this.setState({
        searchData:res.data,
        searchDataLoaded:true
      })
    })
    .catch(err => console.log(err))
  }

  inputSearch(e) {
    console.log(e.target.value)
    this.setState({search: e.target.value})
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
      <div className="wrapper">
      <SearchBar handleSearch={this.handleSearch} inputSearch={this.inputSearch}/>
        {this.renderImages()}
      </div>
      </div>
    )
  }
}

export default Main;
