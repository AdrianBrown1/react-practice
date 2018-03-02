import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from "../list-item/list-item";

export default class ItemList extends Component {

  _getList = () => {
    const { items } = this.props;
    if (items.length) {
      return (
        <ul className="list-of-items">
          {items.map((item) => (
            <ListItem
              key={Math.random()}
              item={item}
            />
          ))}
        </ul>
      )
    } else {
      return (
        <div className="empty-list">
          <span>No Items available!</span>
        </div>
      )
    }
  }

  _navigateToAddItem = () => {
    const { history } = this.props;
    history.push('/add-item');
    console.log('PUSHING');
  }

  render () {
    console.log('helloo',this.props);
    return (
      <div className="list-of-items__container">
        {this._getList()}
        <div className="list-of-items__item">
          <button
            className="add-item__button"
            onClick={this._navigateToAddItem}
          >
          Add Item</button>
        </div>
      </div>
    )
  }
}