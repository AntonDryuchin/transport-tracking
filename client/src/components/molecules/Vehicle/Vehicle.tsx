import React, { useContext } from "react";
import "./Vehicle.css";
import transportData from "../../../db.json";
import { useParams } from "react-router-dom";
import { LangContext } from "../../../context/LangContext";
import YMap from "../../atoms/YMap/YMap";
import VehicleInfo from "../../atoms/VehicleInfo/VehicleInfo";

export default function Transport() {
  //получение настроек языка из контекста
  const lang = useContext(LangContext);

  //получение ID ТС из адресной строки
  const id = Number(useParams().id);

  //формирование массива ТС из одного элемента (логика карты работает только с массивами)
  const list = transportData.vehicles.filter((vehicle) => vehicle.id === id);

  return (
    <div className="transport-container">
      <h3>{lang.lang === "en" ? `Vehicle #${id}` : `Транспорт #${id}`}</h3>
      <YMap list={list} mode="One" />
      <VehicleInfo {...list[0]} />
    </div>
  );
}
