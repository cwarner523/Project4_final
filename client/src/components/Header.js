import React from 'react';

const Header = (props) => {
  return (
    <header>
      <li onClick={() => props.setPage('main')}><img src='./images/logo.png' className="logo"/></li>
      <nav>
        <ul>
          <li onClick={() => props.setPage('login')}>Log In</li>
          <li onClick={() => props.setPage('register')}>Register</li>
          <li onClick={() => props.setPage('profile')}>My Profile</li>
          <li onClick={props.logOut}>Logout</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
