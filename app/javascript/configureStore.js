import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
  greetings: [
    {
      name: 'Hi',
      guid: '123',
    },
  ],
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'GET_GREETINGS_SUCCESS':
      return { greetings: action.json.greetings };
  }
  return state;
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}
