import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { __updateTodo } from "../../redux/modules";
import { __getTodo } from "../../redux/modules";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  const global = useSelector((state) => state.TodoSlice.todo);
  const param = useParams();
  const { error } = useSelector((state) => state.TodoSlice);

  const theTodo = global.find((list) => list.id === param.id);
  const navigate = useNavigate(`/${theTodo?.id}`);

  const [title, setTitle] = useState(theTodo?.title);
  const [content, setContent] = useState(theTodo?.content);

  useEffect(() => {
    if (global.length < 1) return;

    // 새로고침 후 todo에 데이터가 들어왔을 때
    // input에 todo의 title과 content를 넣음
    const todo = global.find((list) => list.id === param.id);
    setTitle(todo?.title);
    setContent(todo?.content);

    // 경고를 무시하겠다는 의미
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [global]);

  if (error) {
    return <div>{error.massage}</div>;
  }

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
    if (window.confirm("수정하시겠습니까?") === true) {
      navigate(`/${theTodo?.id}`);
      dispatch(
        // title과 content만 수정한 객체를 dispatch로 보냄
        __updateTodo({
          id: theTodo.id,
          title: title,
          content: content,
          isDone: theTodo.isDone,
        })
      );
    }
  };
  return (
    <DetailBox>
      <CardHead>
        ID: {theTodo?.id.slice(0, 8)}
        <GoTodo
          onClick={() => {
            navigate("/");
          }}
        >
          ➡️ Todo List
        </GoTodo>
      </CardHead>
      <CardMain>
        <span>{theTodo?.isDone === false ? "🔥Working🔥" : "🎉Done🎉"}</span>
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
