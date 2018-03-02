import ItemList from '../../screens/dash-board/dash-board';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
   items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => ({
  // fetchRestaurants: (params) => {
  //   dispatch(fetchRestaurants(params));
  // },
  // fetchDistance: (params) => {
  //   dispatch(fetchDistance(params));
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(ItemList);