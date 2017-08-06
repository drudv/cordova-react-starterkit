import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(
  state => ({ ready: state.device.ready })
)
export default class App extends React.Component {

  static propTypes = {
    ready: PropTypes.bool.isRequired
  }

  render() {
    const { ready } = this.props;
    return (
      <div>{ ready ? 'Device is ready' : 'initializing device...' }</div>
    );
  }
}
