import styled from "styled-components";

const DetailBox = styled.div`
  width: 500px;
  height: 360px;

  display: flex;
  flex-direction: column;
  margin: 100px auto;

  background-color: white;
  box-shadow: 1px 1px 2px 3px #e5dbff;

  border: 2px solid #e0bfe8;
  border-radius: 20px;
`;

// ID, Todo, List 부분
const CardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  font-size: 20px;
`;

// 제목, 내용
const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 5px;
  margin-left: 30px;

  line-height: 35px;

  /* Working, Done 표시 */
  span {
    margin: 0 auto;
    color: #6d67e4;
    font-size: 32px;
  }
`;

// Todo List로 가는 버튼
const GoTodo = styled.button`
  float: right;
  margin-right: 15px;

  color: #495057;
  cursor: pointer;

  :hover {
    text-shadow: 3px 3px 4px #b197fc;
  }

  background-color: transparent;
  border: none;
  font-size: 20px;
  font-weight: 600;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

const TitleInput = styled.input`
  border: transparent;
  padding: 12px 5px;
  font-size: 2em;
  font-weight: bold;
  white-space: pre-wrap;
  border-bottom: 1px solid #b2b2b2;
  :focus {
    outline: none;
  }
`;

const ContentInput = styled.input`
  border: transparent;
  padding: 12px 5px;
  font-size: 20px;
  line-height: 1.38;
  :focus {
    outline: none;
  }
`;

export {
  DetailBox,
  CardHead,
  CardMain,
  GoTodo,
  TitleInput,
  ContentInput,
  EditForm,
};
