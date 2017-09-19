import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import Main from './components/Main';
import Images from './components/Images';
import UsersProfile from './components/UsersProfile';


import Login from './components/Login';
import Register from './components/Register';


import {
  BrowserRouter as Router, Route,
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
      moodboardData: null,
      currentMoodboardId: null,
    };
    this.setPage = this.setPage.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    axios.get('/moodboard')
    .then(res => {
      this.setState({
        moodboardData: res.data.data,
      });
    }).catch(err => console.log(err));
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
      case 'profile':
        return <UsersProfile moodboardData={this.state.moodboardData} />;
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
      currentPage: 'login',
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
        currentPage: 'register',
      });
    }).catch(err => console.log(err));
  }

  logOut() {
    axios.get('/auth/logout')
    .then(res => {
      this.setState({
        auth:false,
        currentPage: 'main',
      })
    }).catch(err => console.log(err));
  }

  handleMoodboardSubmit(e, name, description) {
    e.preventDefault();
    axios.post('/moodboard', {
      name,
      description,
    }).then(res => {
      this.setState({
        currentPage: 'profile',
      }, () => console.log(this.state.currentPage))
      this.resetMoodBoard();
    }).catch(err => console.log(err));
  }

  selectEditedMoodboard(id) {
    this.setState({
      currentMoodboardId: id,
    })
  }

  resetMoodboard() {
    axios.get('/moodboard')
    .then(res => {
      this.setState({
        moodboardData: res.data.data,
      })
    })
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Header setPage={this.setPage} logOut={this.logOut} />
            {this.decideWhichPage()}
        </div>
      </Router>
    );
  }
}

export default App;
