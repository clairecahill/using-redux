import { combineReducers } from 'redux';

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions';

let todoId = 0;
function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          text: action.text,
          completed: false,
          id: ++todoId
        },
        ...state
      ];
    case TOGGLE_TODO:
      return state.map(todo => (
        todo.id === action.id ? {
          ...todo,
          completed: !todo.completed
        } : todo
      ));
    default:
      return state;
  }
}

function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// export default function rootReducer(state = {}, action) {
//   return {
//     todos: todosReducer(state.todos, action),
//     visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)
//   };
// }

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});
export default rootReducer;
