import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from "../form/form";

export default class ItemList extends Component {

  render () {
    const { history, addItem, items } = this.props;
    return (
      <div className="list-of-items__container">
        <FormItem history={history} addItem={addItem} items={items}/>
        <div className="list-of-items__item">
        </div>
      </div>
    )
  }
}