import Router from "./shared/Router";
import GlobalStyle from "./redux/components/GlobalStyle";
import { __getTodo } from "./redux/modules/TodoSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
