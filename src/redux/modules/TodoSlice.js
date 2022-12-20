import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  todo: [
    {
      id: uuidv4(),
      title: "React",
      content: "리액트 과제 제출하기",
      isDone: true,
    },
    {
      id: uuidv4(),
      title: "독서하기",
      content: "<IT지식> 10장 읽기",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "할 일이 너무 많아서 제목이 길어요",
      content:
        "할 게 너무 많아서 내용이 길어질 수도 있잖아요. 할 게 정말 너무 너무 너무 많다!!!!",
      isDone: false,
    },
  ],
};

// Redux Toolkit 적용한 Reducer
const TodoSlice = createSlice({
  name: "TodoS", // 이 모듈의 이름
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
