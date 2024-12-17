import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_DO, REMOVE_TO_DO, TOGGLE_COMPLETED } from './redux/todosSlice';
import Logo from './Logo';
import './App.css';

function App() {
  const TO_DOS = useSelector((state) => state.todos);
  const DISPATCH = useDispatch();
  const [newTodo, setNewTodo] = React.useState('');

  const HANDLE_SUBMIT = (e) => {
    e.preventDefault();
    DISPATCH(ADD_TO_DO({ id: Date.now(), text: newTodo, completed: false }));
    setNewTodo('');
  };

  const HANDLE_REMOVE = (id) => {
    DISPATCH(REMOVE_TO_DO(id));
  };

  const HANDLE_TOGGLE_COMPLETED = (id) => {
    DISPATCH(TOGGLE_COMPLETED(id));
  };

  return (
    <div>
      <Logo className="logo" />
      <h1>To dos list</h1>
      <form onSubmit={HANDLE_SUBMIT}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {TO_DOS.map((toDo) => (
          <li key={toDo.id} className="card">
            <span style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}>
              {toDo.text}
            </span>
            <button onClick={() => HANDLE_REMOVE(toDo.id)}>Remove</button>
            <button onClick={() => HANDLE_TOGGLE_COMPLETED(toDo.id)}>{toDo.completed ? 'Uncomplete' : 'Complete'}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;