import { START_LOADING, STOP_LOADING } from '../actions/session_actions';

const loadingReducer = (oldState = false, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return oldState;
  }
};

export default loadingReducer;