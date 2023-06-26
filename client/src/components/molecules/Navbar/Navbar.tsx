import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { LangContext } from "../../../context/LangContext";

export default function Navbar() {
  // получение из контекста значения настроек языка
  const lang = useContext(LangContext);

  return (
    <div className="nav">
      <ul>
        <Link className="navbar-link" to="/">
          <li>{lang.lang === "en" ? "Main" : "Главная"}</li>
        </Link>

        <Link className="navbar-link" to="/settings">
          <li>{lang.lang === "en" ? "Settings" : "Настройки"}</li>
        </Link>
      </ul>
    </div>
  );
}
