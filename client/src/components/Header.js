import React from 'react';

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => props.setPage('main')}><img src='../images/logo.png' className="logo"/></li>
          <li onClick={() => props.setPage('login')}>Log In</li>
          <li onClick={() => props.setPage('register')}>Register</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
