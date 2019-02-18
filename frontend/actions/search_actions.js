import * as SearchApiUtil from '../util/search_api_utils';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const CLEAR_RESULTS = "CLEAR_RESULTS";

const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results,
});

export const clearResults = () => ({
  type: CLEAR_RESULTS,
});

export const fetchResults = searchTerm => dispatch => {
  return SearchApiUtil.search(searchTerm)
    .then(results => dispatch(receiveResults(results)));
};