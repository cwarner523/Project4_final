import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main'
import Login from './components/Login';
import Register from './components/Register';
import Images from './components/Images'

import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

const API_KEY = 'ba36fb6c5c0bada18b969e17ce9863067e75507abbc0a3af0dbdd201ef0ad080';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
      apiDataLoaded:false,
      auth: false,
      user: null,
      currentPage: 'main',
    };
    this.setPage = this.setPage.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  setPage(page) {
    this.setState({
      currentPage: page,
    })
  }

  decideWhichPage() {
    switch(this.state.currentPage) {
      case 'main':
        return <Main />;
        break;
      case 'login':
        return <Login handleLoginSubmit={this.handleLoginSubmit} />;
        break;
      case 'register':
        return <Register handleRegisterSubmit={this.handleRegisterSubmit} />;
        break;
      default:
        break;
    }
  }

  handleLoginSubmit(e, username, password) {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password,
    }).then(res => {
    this.setState({
      auth: res.data.auth,
      user: res.data.user,
    });
    }).catch(err=> console.log(err));
  }

  handleRegisterSubmit(e, username, password, email, display_name) {
    e.preventDefault();
    axios.post('/auth/register', {
      username,
      password,
      email,
      display_name,
    }).then (res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
      });
    }).catch(err => console.log(err));
  }


  render() {
    return (
      <Router>
      <div className="App">
        <img src='./images/logo.png' className="logo"/>
           <Route exact path = '/register' render = {() => <Register handleRegisterSubmit = {this.handleRegisterSubmit} />} />
            <Route exact path = '/login' render = {() => <Login handleLoginSubmit = {this.handleLoginSubmit} />} />

        <div className="wrapper">
          <div clasName="form-wrapper">
            <form>
              <input type="text" name="search" placeholder="search image"></input>
              <button onClick={() => {
                var search = document.getElementById('search').value;
                this.getImagesBySearch(search);
              }}>Submit</button>
            </form>
          </div>

          {this.decideWhichPage()}
        </div>

      </div>
      </Router>
    );
  }
}

export default App;
