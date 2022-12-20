import { v4 as uuidv4 } from "uuid";

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

// Action Creator
// todo 추가하기
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// todo 삭제하기
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// todo 상태 변경하기
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

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

// Reducer
const TodoSlice = (state = initialState, action) => {
  switch (action.type) {
    // 추가하기
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    // 삭제하기
    case DELETE_TODO:
      const newTodo = state.todo.filter((del) => del.id !== action.payload);
      return {
        todo: newTodo,
      };

    // 상태 변경(완료, 취소)
    case SWITCH_TODO:
      const switchId = state.todo.map((todo) => {
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
      return {
        todo: switchId,
      };
    default:
      return state;
  }
};

// export default reducer
export default TodoSlice;
