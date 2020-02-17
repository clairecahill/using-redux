// import { createStore } from 'redux';
const { createStore } = require('redux');

function increment(amount) {
  return {
    type: 'INCREMENT',
    amount: amount
  };
}

function decrement(amount) {
  return {
    type: 'DECREMENT',
    amount: amount
  };
}

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.amount
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.amount
      };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment(3));
store.dispatch(increment(6));
store.dispatch(increment(9));
store.dispatch(decrement(3));
store.dispatch(decrement(6));
store.dispatch(decrement(9));

unsubscribe();

store.dispatch(increment(3));
store.dispatch(increment(6));
store.dispatch(increment(9));
store.dispatch(decrement(3));
store.dispatch(decrement(6));
store.dispatch(decrement(9));
