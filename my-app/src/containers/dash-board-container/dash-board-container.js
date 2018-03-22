import ItemList from '../../screens/dash-board/dash-board';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/actions';
// import weather from '../../reducers/weather';

const mapStateToProps = (state) => {
  return {
   weather: state.weather,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (params) => {
    dispatch(fetchWeather(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(ItemList);