import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { follow } from '../actions/follow';


class Subscribe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Normally, I wouldn't use a stateful component in conjunction with Redux,
    // however I only needed to keep track of a variable that oscillates between 
    // true and false. 
    this.setState({isSubscribed: false});
  }

  handleSubscription() {
    // this is where I would typically handle things such as 
    // form validation before dispatching an action creator
    let name = 'Foobar';
    this.props.subscribe(name, this.state.isSubscribed);
    this.setState({isSubscribed: !this.state.isSubscribed});
  }

  render() {
    return (
      <div>
        <button className="btn btn-info" onClick={this.handleSubscription.bind(this)}> 
          {
            !this.state.isSubscribed ? 'Subscribe' : 'Unsubscribe'
          }
        </button>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    subscribe: follow,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Subscribe);


