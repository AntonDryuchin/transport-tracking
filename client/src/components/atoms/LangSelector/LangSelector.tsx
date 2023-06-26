import React, { useContext } from "react";
import { LangContext } from "../../../context/LangContext";

export default function LangSelector() {
  const { lang, setLang } = useContext(LangContext);

  const handleLangChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLang(event.target.value);
  };

  return (
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
  );
}
