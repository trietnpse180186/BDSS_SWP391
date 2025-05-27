import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
export default function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
