import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router'

class HomePage extends React.Component {
  render() {
    return (
      <div className = "homePage container">
        <div className = "jumbotron">
          <div className = "container">
            <h1>Welcome to ShareBook</h1>
            <p></p>
            <Link to='/' className='btn btn-lg btn-default'>Home »</Link>
          </div>
        </div>

        <div className = "container">
          <div className = "row">
            <div className = "col-md-4">
              <h2>About</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <Link to='about' className='btn btn-default'>About »</Link> 
            </div>
        
            <div className = "col-md-4">
              <h2>Donate</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <Link to='requests' className='btn btn-default'>Donate »</Link>
            </div>
        
            <div className = "col-md-4">
              <h2>Request</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <Link to='/request' className='btn btn-default'>Request »</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default HomePage;
