import Router from "./shared/Router";
import GlobalStyle from "./redux/components/GlobalStyle";
import { __getTodo } from "./redux/modules/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.TodoSlice);

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <GlobalStyle />;
      <Router />;
    </>
  );
};

export default App;
