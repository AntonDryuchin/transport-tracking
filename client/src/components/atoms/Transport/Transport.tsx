import React, { useContext } from "react";
import "./Transport.css";
import transportData from "../../../db.json";
import { useParams } from "react-router-dom";
import Map from "../Map/Map";
import { LangContext } from "../../../context/LangContext";

export default function Transport() {
  //получение настроек языка из контекста
  const lang = useContext(LangContext);

  //получение ID ТС из адресной строки
  const id = Number(useParams().id);

  //формирование массива ТС из одного элемента (логика карты работает только с массивами)
  const list = transportData.vehicles.filter((vehicle) => vehicle.id === id);

  //обработчик клика по кнопке звонка водителю
  const handleCall = () => {
    const url = `tel:${list[0].driverPhoneNumber}`;
    window.open(url, "_blank");
  };

  //обработчик клика по кнопке сообщения водителю
  const handleSendMessage = () => {
    let message;
    if (lang.lang === "en") {
      message =
        "Good afternoon, could you please tell me what order number you currently have in the works";
    } else {
      message =
        "Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе";
    }
    const phoneNumber = list[0].driverPhoneNumber;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="transport-container">
      <h3>{lang.lang === "en" ? `Vehicle #${id}` : `Транспорт #${id}`}</h3>
      <Map list={list} />
      <div className="transport-info">
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
      </div>
      <div className="button-container">
        <button onClick={handleCall}>
          {lang.lang === "en" ? "Call" : "Позвонить"}
        </button>
        <button onClick={handleSendMessage}>
          {lang.lang === "en" ? "Message" : "Написать"}
        </button>
      </div>
    </div>
  );
}
