import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    ADD_TO_DO(state, action) {
      state.push(action.payload);
    },
    REMOVE_TO_DO(state, action) {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
    TOGGLE_COMPLETED(state, action) {
      return state.map((toDo) => (toDo.id === action.payload ? { ...toDo, completed: !toDo.completed } : toDo));
    },
  },
});

export const { ADD_TO_DO, REMOVE_TO_DO, TOGGLE_COMPLETED } = todosSlice.actions;
export default todosSlice.reducer;