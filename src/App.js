import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LogInPage";
import AccountPage from "./pages/AccountPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import WritingPage from "./pages/WritingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/accountPage" element={<AccountPage />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/detailPage" element={<DetailPage />}></Route>
        <Route path="/writePage" element={<WritingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
