import styled from "styled-components";

// 각 todoList(working, Done) 전체 감싸는 부분
const ListContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: top;

  margin-left: 20px;

  height: 300px;
`;

// card section
const AllList = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

// todo card
const ListBox = styled.div`
  width: 260px;
  height: 170px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-right: 20px;
  margin-bottom: 20px;

  background-color: white;
  box-shadow: 1px 1px 2px 3px #e5dbff;

  border: 2px solid #e0bfe8;
  border-radius: 20px;
`;

const ContentText = styled.div`
  margin-left: 20px;

  /* card title */
  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 20px;
  }

  /* card content */
  h4 {
    margin-top: 15px;
    margin-bottom: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

// 삭제하기, 변경(완료, 취소) 버튼
const ButtonS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 상세보기
const DetailLink = styled.span`
  display: flex;
  justify-content: end;
  margin-right: 15px;
  margin-top: 0;
  margin-bottom: 5px;

  cursor: pointer;

  :hover {
    text-shadow: 3px 3px 4px #b197fc;
  }

  font-size: 15px;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #495057;
  }
`;

export { ListContainer, AllList, ListBox, ContentText, ButtonS, DetailLink };
