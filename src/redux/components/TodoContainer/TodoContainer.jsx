import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
import {
  ListContainer,
  AllList,
  ListBox,
  ContentText,
  ButtonS,
  DetailLink,
} from "./style";
import { __deleteTodo, __switchTodo } from "../../modules";

const TodoContainer = ({ isActive }) => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.TodoSlice);

  // TodoList 값 가져오기
  const globalTodo = useSelector((state) => state.TodoSlice.todo);

  // 삭제하기 버튼을 눌렀을 때
  /** 삭제 확인 창 추가 22.12.18
   */
  const handleDeleteToDo = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?") === true) {
      dispatch(__deleteTodo(id));
    }
  };

  // 완료, 취소 버튼 눌렀을 때
  const handleSwitchState = (switchState) => {
    dispatch(__switchTodo(switchState));
  };

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <ListContainer>
      <h1>{isActive ? "Working...🔥🔥🔥" : "Done 🎉🎉🎉"}</h1>
      <AllList>
        {globalTodo
          .filter((todo) => todo.isDone === !isActive)
          .map((todo) => {
            return (
              <ListBox key={todo.id}>
                <ContentText>
                  <DetailLink>
                    <Link to={`/${todo.id}`}>➡️ 상세보기</Link>
                  </DetailLink>
                  <div>{todo.title}</div>
                  <h4>{todo.content}</h4>
                </ContentText>
                <ButtonS>
                  <CustomButton
                    btnName="delSwitch"
                    onClick={() => handleDeleteToDo(todo.id)}
                  >
                    삭제하기
                  </CustomButton>
                  <CustomButton
                    btnName="delSwitch"
                    onClick={() =>
                      handleSwitchState({
                        id: todo.id,
                        title: todo.title,
                        content: todo.content,
                        isDone: !todo.isDone,
                      })
                    }
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </CustomButton>
                </ButtonS>
              </ListBox>
            );
          })}
      </AllList>
    </ListContainer>
  );
};

export default TodoContainer;
