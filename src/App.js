import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import AccountPage from "./pages/AccountPage";
import MainPage from "./pages/mainPage";
import DetailPage from "./pages/DetailPage";
import WritingPage from "./pages/WritingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/AccountPage" element={<AccountPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/DetailPage" element={<DetailPage />} />
        <Route path="/WritePage" element={<WritingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
