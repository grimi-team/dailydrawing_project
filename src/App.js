import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/accountPage";
import DetailPage from "./pages/detailPage";
import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />}></Route>
        <Route path="/accountPage" element={<AccountPage />}></Route>
        <Route path="/mainPage" element={<MainPage />}></Route>
        <Route path="/detailPage" element={<DetailPage />}></Route>
        <Route path="/writePage" element={<WritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
