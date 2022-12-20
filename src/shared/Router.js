import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoList from "../pages/HomePage";
import Todo from "../pages/DetailPage";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {<Route path="/" element={<ToDoList />} />}
          {<Route path="/:id" element={<Todo />} />}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
