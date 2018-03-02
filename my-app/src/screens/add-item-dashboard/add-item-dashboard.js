import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SecondaryHeader from '../../components/header/secondary-header';
import AddItemForm from '../../components/add-item-form/add-item-form';

export default class AddItemDashboard extends Component {

  static propTypes = {
    items: PropTypes.object,
  }

  render() {
    const { items } = this.props.items;
    const { history } = this.props;
    return (
      <div className="dash-board__container">
        <div className="dash-board__items">
          <SecondaryHeader/>
          <AddItemForm history={history}/>
        </div>
      </div>
    );
  }
}