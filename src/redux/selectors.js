import { VisibilityFilters } from './actions';

export function getTodos(state) {
  return state.todos;
}

export function getTodosByVisibilityFilter(state) {
  const todos = getTodos(state);
  const visibilityFilter = getVisibilityFilter(state);
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
}

export function getActiveTodoCount(state) {
  const todos = getTodos(state);
  return todos.reduce(
    (count, todo) => todo.completed ? count : count + 1,
    0
  );
}

export function getVisibilityFilter(state) {
  return state.visibilityFilter;
}
