import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  _createItem(event) {
    event.preventDefault();
    const item = {
      title: this.title.value,
      price: this.price.value,
      soldPrice: this.soldPrice.value,
      image: this.image.value,
      vendor: this.vendor.value,
    }
    //TODO: add item to state.
    // this.props.addItem(item);
    this.props.history.push('/');
    this.addItemForm.reset();
  }

  render () {
    return (
     <form
      className="form-container"
      onSubmit={(e) => this._createItem(e)}
      ref={(input) => this.addItemForm = input}
     >
      <div className="form-content">
        <div className="form-content__item">
          <input type='text'
            placeholder='Item Name'
            className='form-text__input'
            ref={(input) => this.title = input}
          />
        </div>
        <div className="form-content__item">
          <input type='text'
            placeholder='Purchase Price'
            className='form-text__input'
            ref={(input) => this.price = input}
          />
        </div>
        <div className="form-content__item">
          <input type='text'
            placeholder='Sold Price'
            className='form-text__input'
            ref={(input) => this.soldPrice = input}
          />
        </div>
      </div>
      <div className="form-content">
      <div className="form-content__item">
        <input type='text'
          placeholder='Image URL'
          className='form-text__input'
          ref={(input) => this.image = input}
        />
      </div>
      <div className="form-content__item">
        <select ref={(input) => this.vendor = input}>
          <option value='ebay'>Ebay</option>
          <option value='paypal'>Paypal</option>
          <option value='none'>none</option>
        </select>
      </div>
        <button
          type='submit'
          className="add-item__button"
          onClick={this._navigateToAddItem}
        >
        Add Item</button>
      </div>
     </form>
    )
  }
}