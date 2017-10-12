import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router'

class HomePage extends React.Component {
  render() {
    return (
      <div className = "homePage container" id="homepage">
          <div className = "container text-center padding">
            <h1>Welcome to ShareBook</h1>
            <p>Give your books a second chance... start sharing!</p>    
          </div>
      </div>
    )
  }

}

export default HomePage;
