import { AddBtnStyle, BtnStyle } from "./style";

const CustomButton = (props) => {
  switch (props.btnName) {
    // 추가하기 버튼
    case "add": {
      return (
        <AddBtnStyle onClick={props.onClick}>{props.children}</AddBtnStyle>
      );
    }
    case "delSwitch": {
      return <BtnStyle onClick={props.onClick}>{props.children}</BtnStyle>;
    }

    default: {
      return <button onClick={props.onClick}>{props.children}</button>;
    }
  }
};

export default CustomButton;
