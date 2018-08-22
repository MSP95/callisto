import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';
import {loadState} from './localStorage';

 const persistedState = loadState();

  let empty_navbar={
    collapse: true
  }
// let ="/images/bkg.jpg"
let empty_image={
  backgroundImage: "url(/images/bkg.jpg)"
};
  function image(state=empty_image, action){
    switch(action.type) {
      case 'JOBS':
      return Object.assign({}, state, {backgroundImage: "url(/images/jobs/dunk_jobs.jpg)"});

      default:
      return state;
    }
  }
  function navBar(state=empty_navbar, action) {

    switch(action.type) {

      case 'TOGGLE_NAV' :
      return Object.assign({}, state, {collapse: !state.collapse});
      case 'TOGGLE_NAV_TRUE' :
      return Object.assign({}, state, {collapse: true});
      default:
      return state;
    }
}
function loc(state=null, action){
  switch(action.type) {

    case 'LOC' :
    return action.location;

    default:
    return state;
  }
}
function root_reducer(state0 = persistedState, action) {
  let reducer = combineReducers({navBar, image, loc});
  let state1 = reducer(state0, action);
  // console.log("ReduxState", state1);
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;
