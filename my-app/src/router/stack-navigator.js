import { StackNavigator } from 'react-navigation';
// import MapContainer from '../containers/map-container/map-container';
// import FilteredBenchList from '../containers/filtered-bench-list-container/filtered-bench-list-container'; //eslint-disable-line

const routeConfigs = {
  Main: {
    screen: MapContainer,
  },
};

const stackNavigatorConfig = {
  initialRouteName: 'Main',
  headerMode: 'screen',
};

export default StackNavigator(routeConfigs, stackNavigatorConfig);