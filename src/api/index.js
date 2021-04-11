import axios from 'axios';

export const fetchTodos = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  const dataArray = res.data;

  const todos = { byId: {}, allIds: [] };
  for(let data of dataArray) {
    todos.byId[data.id] = data;
    todos.allIds.push(data.id);
  }
  
  return todos;
}

export const fetchUsers = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const dataArray = res.data;

  const users = { byId: {}, allIds: [] };
  for(let data of dataArray) {
    users.byId[data.id] = data;
    users.allIds.push(data.id);
  }
  
  return users;
}

export const updateTodo = async (id, data) => {
  const res = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, data);
  return res.data;
}