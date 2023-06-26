import React, { useContext } from "react";
import { Link } from "react-router-dom";
import List from "../../molecules/List/List";
import { LangContext } from "../../../context/LangContext";

export default function MainPage() {
  const lang = useContext(LangContext);

  return (
    <div>
      <h3>
        {lang.lang === "en" ? "Transport tracking" : "Отслеживание транспорта"}
      </h3>
      <List />
    </div>
  );
}
