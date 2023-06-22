import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Navbar";
import List from "./components/molecules/List/List";
import Transport from "./components/molecules/Transport/Transport";
import Settings from "./components/molecules/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/transport/:id" element={<Transport />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <div>111</div>
    </div>
  );
}

export default App;
