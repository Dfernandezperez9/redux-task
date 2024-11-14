import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_DO, REMOVE_TO_DO } from './redux/todosSlice';
import './App.css';

function App() {
  const TO_DOS = useSelector((state) => state.todos);
  const DISPATCH = useDispatch();
  const [newTodo, setNewTodo] = React.useState('');

  const HANDLE_SUBMIT = (e) => {
    e.preventDefault();
    DISPATCH(ADD_TO_DO({ id: Date.now(), text: newTodo }));
    setNewTodo('');
  };

  const HANDLE_REMOVE = (id) => {
    DISPATCH(REMOVE_TO_DO(id));
  };

  return (
    <div>
      <h1>To dos list</h1>
      <form onSubmit={HANDLE_SUBMIT}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {TO_DOS.map((toDo) => (
          <li key={toDo.id}>
            {toDo.text}
            <button onClick={() => HANDLE_REMOVE(toDo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;