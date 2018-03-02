import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from "../form/form";

export default class ItemList extends Component {

  _navigateToAddItem = () => {
    const { history } = this.props;
    history.push('/');
    // TODO: update state with created item & call this func after that.
  }

  render () {
    const { history } = this.props;
    return (
      <div className="list-of-items__container">
        <FormItem history={history}/>
        <div className="list-of-items__item">
        </div>
      </div>
    )
  }
}