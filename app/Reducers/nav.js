import {NavigationActions} from 'react-navigation';
import Navigator from '../config/routes';

const initialState = Navigator.router.getStateForAction(NavigationActions.init());
export default (state = initialState, action) => {
    const nexState = Navigator.router.getStateForAction(action, state);
    return nexState || state;
}