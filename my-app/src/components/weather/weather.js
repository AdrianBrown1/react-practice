import React, { Component } from 'react';

export default class Weather extends Component {

  _getWeatherInfo = () => {
    console.log('THE PROPS');
    const { weather } = this.props;
    if(!weather) {
      return null;
    }

    console.log('HELLO WORLD', weather);
    const todaysWeather = weather.todaysWeather;
    const currentTemp = todaysWeather.description;

    return (
      <div className='weather'>
        <div className='weather-col'>
        <p className='weather-description'>Today<span className='weather-text'>{currentTemp}</span>
        </p>
        <p className='weather-description'>Current Temp
          <span className='weather-text'>{todaysWeather.currentTemp}</span>
        </p>
        </div>
        <div className='weather-col'>
          <p className='weather-description'>Humidity
            <span className='weather-text'>{todaysWeather.humidity}</span>
          </p>
          <p className='weather-description'>Today's high
            <span className='weather-text'>{todaysWeather.maxTemp}</span>
          </p>
          <p className='weather-description'>Today's low
            <span className='weather-text'>{todaysWeather.minTemp}</span>
          </p>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="weather-container">
        {this._getWeatherInfo()}
      </div>  
    )
  }
}