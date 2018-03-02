import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header';
import ItemList from '../../components/item-list/item-list';

export default class Dashboard extends Component {

  static propTypes = {
    items: PropTypes.object,
  }

  render() {
    const { items } = this.props.items;
    const { history } = this.props;
    return (
      <div className="dash-board__container">
        <div className="dash-board__items">
          <Header/>
          <ItemList items={items} history={history}/>
        </div>
      </div>
    );
  }
}