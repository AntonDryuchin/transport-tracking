import React, { useContext } from "react";
import LangSelector from "../../atoms/LangSelector/LangSelector";
import { LangContext } from "../../../context/LangContext";

export default function SettingsPage() {
  const lang = useContext(LangContext);
  return (
    <>
      <h3>{lang.lang === "en" ? "Settings" : "Настройки"}</h3>
      <LangSelector />
    </>
  );
}
