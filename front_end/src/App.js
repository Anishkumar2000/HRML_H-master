import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
import Current_month from "./Components/Current_month";
import Previous_month from "./Components/Previous_month";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/view/current_month/:id" element={<Current_month />} />
          <Route path="/view/previous_month/:id" element={<Previous_month />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
