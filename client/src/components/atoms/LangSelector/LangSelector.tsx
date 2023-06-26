import React, { useContext } from "react";
import { LangContext } from "../../../context/LangContext";
import "./LangSelector.css";

export default function LangSelector() {
  const { lang, setLang } = useContext(LangContext);

  const handleLangChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLang(event.target.value);
  };

  return (
    <div className="main-container">
      <h3>{lang === "en" ? "Settings" : "Настройки"}</h3>
      <form>
        <label>
          Русский
          <input
            type="radio"
            value="ru"
            checked={lang === "ru"}
            onChange={handleLangChange}
          />
        </label>
        <label>
          English
          <input
            type="radio"
            value="en"
            checked={lang === "en"}
            onChange={handleLangChange}
          />
        </label>
      </form>
    </div>
  );
}
