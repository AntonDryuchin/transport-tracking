import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Navbar";
import Transport from "./components/molecules/Vehicle/Vehicle";
import { LangContext } from "./context/LangContext";
import List from "./components/molecules/List/List";
import LangSelector from "./components/atoms/LangSelector/LangSelector";

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
          <Route path="/" element={<List />} />
          <Route path="/transport/:id" element={<Transport />} />
          <Route path="/settings" element={<LangSelector />} />
        </Routes>
      </LangContext.Provider>
    </div>
  );
}

export default App;
