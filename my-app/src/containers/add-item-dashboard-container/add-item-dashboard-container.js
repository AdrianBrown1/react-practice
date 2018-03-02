import AddItemDashboard from '../../screens/add-item-dashboard/add-item-dashboard';
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
  )(AddItemDashboard);