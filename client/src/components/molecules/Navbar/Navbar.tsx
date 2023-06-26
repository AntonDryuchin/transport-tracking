import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../../../context/LangContext";

export default function Navbar() {
  const lang = useContext(LangContext);
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <li>{lang.lang === "en" ? "Main" : "Главная"}</li>
        </Link>

        <Link to="/settings">
          <li>{lang.lang === "en" ? "Settings" : "Настройки"}</li>
        </Link>
      </ul>
    </div>
  );
}
