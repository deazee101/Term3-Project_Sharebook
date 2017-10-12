import Radium from 'radium';
import color from 'color';
import React from 'react';
import { Link } from 'react-router';

const styles = {
  base: {
    color: 'gray'
  },
  header: {
    fontSize: 15,
    // color: '#fff',
    margin: 0
  }

}
//@Radium
const Header = (props) => (
  <header className="header"
    style={[
      styles.base,
      styles.header
    ]}>

    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span> 
      </button>
      <a className="navbar-brand" href='/'>Sharebook</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li><a href='about'>About</a></li>
        <li><a href='books'>Book List</a></li> 
        <li><a href='/new'>Donate Book</a></li> 
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    {/* <nav className = "navbar navbar-default"> */}
      {/* <div className = "container-fluid"> */}
        {/* <div className="navbar-header"> */}
          {/* <a className="navbar-brand" href="/">ShareBook</a> */}
        {/* </div> */}
        {/* <div id="navbar" className="navbar-collapse collapse"> */}
          {/* <ul className="nav navbar-nav"> */}
            {/* <li><Link to='/'>Home</Link></li> */}
            {/* <li><Link to='about'>About</Link></li> */}
            {/* <li><Link to='books'>Book List</Link></li> */}
            {/* <li><Link to='/new'>Donate Book</Link></li> */}
          {/* </ul> */}
        {/* </div> */}
      {/* </div> */}
    {/* </nav> */}
  
    </div>
    </div>
    </nav>
  </header>
);


export default Radium(Header);
