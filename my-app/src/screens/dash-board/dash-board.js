import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/form/form';

export default class Dashboard extends Component {

  static propTypes = {
    // items: PropTypes.object,
    fetchWeather: PropTypes.func,
    weather: PropTypes.object,
  }

  render() {
    console.log('FUCK THIS', this.props); 
    const { history, fetchWeather, weather } = this.props;
    // if(!weather) return null;
    // console.log('WEATHER', weather.todaysWeather);
    return (
      <div className="dash-board__container">
        <Form fetchWeather={fetchWeather}/>
      </div>
    );
  }
}