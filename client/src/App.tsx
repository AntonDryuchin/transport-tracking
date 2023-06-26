import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Navbar";
import Transport from "./components/atoms/Transport/Transport";
import MainPage from "./components/pages/MainPage/MainPage";
import { LangContext } from "./context/LangContext";
import SettingsPage from "./components/pages/SettingsPage/SettingsPage";

function App() {
  const [lang, setLang] = useState("ru");

  const langContextValue = {
    lang,
    setLang,
  };
  return (
    <div className="App">
      <LangContext.Provider value={langContextValue}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/transport/:id" element={<Transport />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </LangContext.Provider>
    </div>
  );
}

export default App;
