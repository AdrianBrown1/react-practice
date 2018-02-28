import { NavigationActions } from 'react-navigation';
import { NAVIGATE } from '../constants/action-types';

export const navigate = (routeName) => (
  (dispatch) => {
    if (!routeName) return;
    dispatch(NavigationActions.navigate({ routeName }));
    return {
      type: NAVIGATE,
      payload: {
        routeName,
      },
    };
  }
);
