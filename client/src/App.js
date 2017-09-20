import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import Main from './components/Main';
import Images from './components/Images';
import UsersProfile from './components/UsersProfile';
import MoodboardSingle from './components/MoodboardSingle';

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
      userId: null,
    };
    this.setPage = this.setPage.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleMoodboardSubmit = this.handleMoodboardSubmit.bind(this);
    this.resetMoodboard = this.resetMoodboard.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.logOut = this.logOut.bind(this);
  }

   getInfo() {
    axios.get(`/moodboard/user/${this.state.user.id}`)
    .then(res => {
      this.setState({
        moodboardData: res.data.data,
      });
    }).catch(err => console.log(err));
  }
/*
  getInfoById() {
   axios.get(`/moodboard/user/${this.state.user.id}/`)
   .then(res => {
     this.setState({
       moodboardData: res.data.data,
     });
   }).catch(err => console.log(err));
 }
*/
  setPage(page) {
    this.setState({
      currentPage: page,
    })
  }

  decideWhichPage() {
    switch(this.state.currentPage) {
      case 'main':
        return <Main moodboardData={this.state.moodboardData} />;
        break;
      case 'login':
        return <Login handleLoginSubmit={this.handleLoginSubmit} />;
        break;
      case 'register':
        return <Register handleRegisterSubmit={this.handleRegisterSubmit} />;
        break;
      case 'profile':
        return <UsersProfile moodboardData={this.state.moodboardData} handleMoodboardSubmit={this.handleMoodboardSubmit} />;
        break;
      case 'moodboards':
        return <MoodboardSingle moodboardData={this.state.moodboardData} setPage={this.setPage}/>
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
      })
    }).then(()=>{
      this.getInfo()
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

  handleMoodboardSubmit(e) {
    console.log(e);
    e.preventDefault();
    console.log(e.target.name);
    axios('/moodboard', {
      method: 'POST',
      data: {
        name: e.target.name.value,
        description: e.target.desc.value,
      }
    }).then(res => {
      this.setState({
        currentPage: 'profile',
      }, () => console.log(this.state.currentPage))
      this.resetMoodboard();
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
