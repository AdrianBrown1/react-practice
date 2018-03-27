import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/form/form';
import Weather from '../../components/weather/weather';

export default class Dashboard extends Component {

  static propTypes = {
    // items: PropTypes.object,
    fetchWeather: PropTypes.func,
    weather: PropTypes.object,
  }

  render() {
    const { history, fetchWeather, weather } = this.props;
    return (
      <div className="dash-board__container">
        <Form fetchWeather={fetchWeather} weather={weather}/>
        <Weather weather={weather}/>
      </div>
    );
  }
}