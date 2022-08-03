import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Todo, Home, Login } from "./pages";
import { Content } from "./components";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
