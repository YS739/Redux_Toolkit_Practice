import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoList from "../pages/HomePage";
import Todo from "../pages/DetailPage";
import Layout from "./Layout";
import Edit from "../redux/components/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {<Route path="/" element={<ToDoList />} />}
          {<Route path="/:id" element={<Todo />} />}
          {<Route path="/edit/:id" element={<Edit />} />}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
