import initialState from './initialState';
import {MENU_CLICKED} from '../actions/actionTypes';

export default function navigation(state = initialState.navigation, action) {
  switch (action.type) {
    case MENU_CLICKED:
      const newState = Object.assign({}, state);
      newState.menuOpen = !newState.menuOpen;
      return newState;
    default:
      return state;
  }
}