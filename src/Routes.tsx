import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { About, Home, Login } from "./pages";
import { Content } from "./components";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
