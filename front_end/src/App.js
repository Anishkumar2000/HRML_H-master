import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
import Current_month from "./Components/Current_month";
import Previous_month from "./Components/Previous_month";
import Sal_Add from "./Components/Sal_components/Sal_Add";
import Sal_edit from "./Components/Sal_components/Sal_edit";

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
          <Route path="/view/current_month/sal_add/:id" element = {< Sal_Add/>} />
          <Route path="/sal/edit/:code/:id" element = {<Sal_edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
