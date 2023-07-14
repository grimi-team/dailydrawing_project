import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loginPage from "./pages/loginPage";
import accountPage from "./pages/accountPage";
import mainPage from "./pages/mainPage";
import detailPage from "./pages/detailPage";
import writePage from "./pages/writePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<loginPage />}></Route>
        <Route path="/accountPage" element={<accountPage />}></Route>
        <Route path="/mainPage" element={<mainPage />}></Route>
        <Route path="/detailPage" element={<detailPage />}></Route>
        <Route path="/writePage" element={<writePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
