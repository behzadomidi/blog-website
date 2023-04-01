import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PostId from "../pages/PostId";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostId />} />
    </Routes>
  );
};

export default Router;
