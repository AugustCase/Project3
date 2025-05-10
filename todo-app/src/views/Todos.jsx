import React, { useState } from 'react';
import TodoList from '../components/TodoList';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => 
    filter === 'all' ? true :
    filter === 'completed' ? todo.completed :
    !todo.completed
  );

  return (
    <div className="todos-container">
      <TodoList
        todos={filteredTodos}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setFilter={setFilter}
      />
    </div>
  );
}

export default Todos;