import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

// Initial State

const initialState = {
  todo: [],
  isLoading: false,
  error: null,
};

// Thunk 사용해서 db.json 값 가져오기

// Redux Toolkit 적용한 Reducer
const TodoSlice = createSlice({
  name: "TodoS", // 이 모듈의 이름 - configStore에서 사용
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },

    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((del) => del.id !== action.payload);
    },

    switchTodo: (state, action) => {
      state.todo = state.todo.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return {
          ...todo,
        };
      });
    },
  },
});

// export default reducer
export const { addTodo, deleteTodo, switchTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
