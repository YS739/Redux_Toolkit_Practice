import styled from "styled-components";

const AddTodoBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: 3px solid #e5dbff;
  border-radius: 20px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin: 0 10px;

  border: none;
  border-radius: 10px;

  font-weight: 900;
  font-size: 15px;
  background: #f3f0ff;
  color: #495057;

  :focus-visible {
    outline: none;
  }

  :hover {
    background-color: #e5dbff;
  }

  :focus {
    background-color: #e5dbff;
    color: #495057;
    box-shadow: 0 0 2px 1px #b197fc;
  }
`;

export { AddTodoBox, InputBox, Input };
