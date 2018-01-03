import {combineReducers} from 'redux';
import navigation from './navigationReducer';
import {reducer as responsive, mediaQueryTracker} from 'redux-mediaquery'

const rootReducer = combineReducers({
  responsive,
  navigation
});

export default rootReducer;