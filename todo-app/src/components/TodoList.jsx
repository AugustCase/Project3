import React, { useState } from 'react';
import './TodoList.css';

function TodoList({ todos, addTodo, toggleTodo, deleteTodo, setFilter }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  return (
    <div className="todo-list">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add todo..." />
        <button type="submit">Add</button>
      </form>

      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              className={todo.completed ? 'completed' : ''}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;