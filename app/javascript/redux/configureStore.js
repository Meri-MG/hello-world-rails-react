import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { GET_GREETINGS_SUCCESS } from '../components/HelloWorld';
const initialState = {
  greetings: [
    {
      greeting: '1',
    },
    {
      greeting: '2',
    },
  ],
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case GET_GREETINGS_SUCCESS:
      return { greetings: action.json };
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
