import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { __updateTodo } from "../../modules";
import {
  DetailBox,
  CardHead,
  CardMain,
  GoTodo,
  EditForm,
  TitleInput,
  ContentInput,
} from "./style";

const Edit = () => {
  const global = useSelector((state) => state.TodoSlice.todo);
  const dispatch = useDispatch();
  const param = useParams();

  const theTodo = global.find((list) => list.id === param.id);
  const navigate = useNavigate(`/${theTodo.id}`);

  const [title, setTitle] = useState(theTodo.title);
  const [content, setContent] = useState(theTodo.content);

  // input 창에 제목과 내용을 입력했을 때 입력값 가져오기
  const inputContent = (e) => {
    e.preventDefault();
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };

  const editHandler = () => {
    navigate("/");
    dispatch(
      // title과 content만 수정한 객체를 dispatch로 보냄
      __updateTodo({
        id: theTodo.id,
        title: title,
        content: content,
        isDone: theTodo.isDone,
      })
    );
  };
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
        <EditForm>
          <TitleInput
            id="title"
            value={title}
            name="title"
            method="post"
            onChange={inputContent}
            autoFocus
          />
          <ContentInput
            id="content"
            value={content}
            name="content"
            type="text"
            method="post"
            onChange={inputContent}
          />
        </EditForm>
        <button onClick={editHandler}>수정하기</button>
      </CardMain>
    </DetailBox>
  );
};

export default Edit;
