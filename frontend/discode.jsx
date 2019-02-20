import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { fetchFriends, fetchFriendRequests, acceptFriendRequest, sendFriendRequest, rejectFriendRequest } from './util/friends_api_utils';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.servers;
  } else {
    store = configureStore();
  }

  window.fetchFriends = fetchFriends;
  window.fetchFriendRequests = fetchFriendRequests;
  window.sendFriendRequest = sendFriendRequest;
  window.acceptFriendRequest = acceptFriendRequest
  window.rejectFriendRequest = rejectFriendRequest;

  ReactDOM.render(<Root store={store} />, root);
});