import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {

  render () {
    const { item } = this.props;
    const price = `Purchase Price: $${item.price}`;
    const soldPrice = `Sold Price: $${item.soldPrice}`;
    return (
      <li className="list-item__container">
        <div className="list-item__content">
          <img className="list-item__image" src={item.image}/>
        </div>
        <div className="list-item__content">
          <p className="list-item__title">{item.title}</p>
          <p className="list-item__price">{price}</p>
          <p className="list-item__sold">{soldPrice}</p>
        </div>
      </li>
    )
  }
}