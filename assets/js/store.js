import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';
import {loadState} from './localStorage';

 const persistedState = loadState();

  let empty_navbar={
    collapse: false
  }
  function navBar(state=empty_navbar, action) {

    switch(action.type) {

      case 'TOGGLE_NAV' :
      return Object.assign({}, state, {collapse: !state.collapse});

      default:
      return state;
    }
}

function root_reducer(state0 = persistedState, action) {
  let reducer = combineReducers({navBar});
  let state1 = reducer(state0, action);
  console.log("ReduxState", state1);
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;
