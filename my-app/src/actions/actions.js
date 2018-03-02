import { ADD_ITEM } from '../constants/action-types';

export const updateItems = (items) => ({
  type: ADD_ITEM,
  payload: {
    items,
  },
});

export const addItem  = (item, items) => (dispatch) => {
  console.log('*** ITEM ***', item);
  console.log('   &&& ITEMs &&& ', items);
  items.push(item);
  dispatch(updateItems(items));
};