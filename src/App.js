import Prediction from "./components/Prediction";
import "./css/App.css";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/prediction" element={<Prediction />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
