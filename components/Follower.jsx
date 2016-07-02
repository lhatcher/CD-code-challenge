import React from 'react';
import { connect } from 'react-redux';


class Follower extends React.Component {

  render() {

    return (
      <div className="person">
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default Follower;