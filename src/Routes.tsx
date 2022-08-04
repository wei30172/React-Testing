import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Accomplishment, Elements, Todos, Todos2, Home, Login } from "./pages";
import { Content } from "./components";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="/accomplishment" element={<Accomplishment />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos2" element={<Todos2 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
