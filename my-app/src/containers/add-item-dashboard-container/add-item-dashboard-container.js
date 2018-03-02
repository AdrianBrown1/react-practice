import AddItemDashboard from '../../screens/add-item-dashboard/add-item-dashboard';
import { connect } from 'react-redux';
import { addItem } from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
   items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item, items) => {
    dispatch(addItem(item, items));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(AddItemDashboard);