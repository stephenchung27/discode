import { RECEIVE_RESULTS } from '../actions/search_actions';

const searchReducer = (oldState = [], action ) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_RESULTS:
      return action.results;
    default:
      return oldState;
  }
}

export default searchReducer;