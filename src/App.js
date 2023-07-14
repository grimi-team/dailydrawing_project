import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />}></Route>
        <Route path="/accountPage" element={<AccountPage />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/detailPage" element={<DetailPage />}></Route>
        <Route path="/writePage" element={<WritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
