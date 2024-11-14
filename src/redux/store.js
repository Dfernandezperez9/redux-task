import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

const STORE = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default STORE;