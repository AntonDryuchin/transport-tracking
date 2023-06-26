import React, { useContext } from "react";
import transportData from "../../../db.json";
import { useParams } from "react-router-dom";
import Map from "../Map/Map";
import { LangContext } from "../../../context/LangContext";

export default function Transport() {
  const lang = useContext(LangContext);
  const id = Number(useParams().id);
  const list = transportData.vehicles.filter((vehicle) => vehicle.id === id);
  // console.log(list);

  const handleCall = () => {
    const url = `tel:${list[0].driverPhoneNumber}`;
    window.open(url, "_blank");
  };

  const handleSendMessage = () => {
    const message =
      "Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе";
    const phoneNumber = list[0].driverPhoneNumber;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="transport-info">
      <Map list={list} />
      <p>
        {lang.lang === "en" ? "Category: " : "Категория: "}
        {list[0].category}
      </p>
      <p>
        {lang.lang === "en" ? "Driver's name: " : "Имя водителя: "}
        {list[0].driverName}
      </p>
      <p>
        {lang.lang === "en" ? "Phone: " : "Телефон: "}
        {list[0].driverPhoneNumber}
      </p>
      <button onClick={handleCall}>
        {lang.lang === "en" ? "Call" : "Позвонить"}
      </button>
      <button onClick={handleSendMessage}>
        {lang.lang === "en" ? "Message" : "Написать"}
      </button>
    </div>
  );
}
