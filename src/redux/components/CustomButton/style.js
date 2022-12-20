import styled from "styled-components";

// styled-components

// 추가하기 버튼 style
const AddBtnStyle = styled.button`
  background: #e5dbff;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin-left: 20px;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #495057;

  :hover {
    color: #9775fa;
    transition: 0.4s;

    box-shadow: 0 0 2px 1px #b197fc;
  }
  cursor: pointer;
`;

// 삭제, 완료, 취소 버튼 중복되는 style
const BtnStyle = styled.button`
  background: #e5dbff;
  border: none;
  border-radius: 15px;
  margin: 0 6px;
  padding: 5px 7px;

  font-size: 14px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #495057;

  :hover {
    color: #9775fa;
    transition: 0.4s;

    box-shadow: 0 0 2px 1px #b197fc;
  }
  cursor: pointer;
`;

export { AddBtnStyle, BtnStyle };
