// todo 상세 페이지
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DetailBox, CardHead, CardMain, GoTodo } from "./style";

const Todo = () => {
  const global = useSelector((state) => state.TodoSlice.todo);
  const param = useParams();
  const theTodo = global.find((list) => list.id === param.id);

  const navigate = useNavigate();

  return (
    <DetailBox>
      <CardHead>
        ID: {theTodo.id.slice(0, 8)}
        <GoTodo
          onClick={() => {
            navigate("/");
          }}
        >
          ➡️ Todo List
        </GoTodo>
      </CardHead>
      <CardMain>
        <span>{theTodo.isDone === false ? "🔥Working🔥" : "🎉Done🎉"}</span>
        <h1>제목: {theTodo.title}</h1>
        <h2>내용: {theTodo.content}</h2>
        <button onClick={() => navigate(`/edit/${theTodo.id}`)}>
          수정하기
        </button>
      </CardMain>
    </DetailBox>
  );
};

export default Todo;
