import { createSelector } from "reselect";

export const getIsLoading = createSelector(
  state => state.todos.isLoading,
  state => state.users.isLoading,
  (todosIsLoading, usersIsLoading) => todosIsLoading || usersIsLoading
);

export const makeGetSelectedTodos = isChecked => createSelector(
  state => state.todos.data,
  state => state.users.currentUser,
  (todos, currentUser) => {
    const selectedTodoIds = todos.allIds.filter(
      (id) => todos.byId[id].userId === parseInt(currentUser) &&
                todos.byId[id].completed === isChecked
    );

    return selectedTodoIds.map(id => todos.byId[id]);
  }
);