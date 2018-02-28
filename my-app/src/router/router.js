//TO DO: set up router , router-container & stack-navigator
import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';
import StackRouter from './stack-navigator';

export default class RouterWithNav extends Component {
  static propTypes = {
    nav: PropTypes.object,
    dispatch: PropTypes.func,
  }
  render() {
    return (
      <StackRouter
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}
