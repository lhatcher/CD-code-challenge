import React from 'react';
import { connect } from 'react-redux';

import Follower from './Follower';
import Subscribe from './Subscribe';


class App extends React.Component {

  render() {

    let followers = this.props.followers;

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Coding Challenge - Liam Hatcher</a>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="col-md-6 col-md-offset-3 text-center">
            <h3>Followers</h3>
            <Subscribe />
            {followers.map( (follower, i) => <Follower key={i} name={follower.name}/> )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    followers: state.followers,
  };
};

export default connect(mapStateToProps)(App);