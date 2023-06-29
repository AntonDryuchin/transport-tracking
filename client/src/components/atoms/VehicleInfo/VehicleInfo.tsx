import React, { useContext } from "react";
import "./VehicleInfo.css";
import { LangContext } from "../../../context/LangContext";
import { Vehicle } from "../../../types";

export default function VehicleInfo(vehicle: Vehicle) {
  //получение настроек языка из контекста
  const lang = useContext(LangContext);
  //обработчик клика по кнопке звонка водителю
  const handleCall = () => {
    const url = `tel:${vehicle?.driverPhoneNumber}`;
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
    const phoneNumber = vehicle?.driverPhoneNumber;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <div className="vehicle-info-container">
      <div className="vehicle-info">
        <p>
          {lang.lang === "en" ? "Category: " : "Категория: "}
          {vehicle?.category}
        </p>
        <p>
          {lang.lang === "en" ? "Driver's name: " : "Имя водителя: "}
          {vehicle?.driverName}
        </p>
        <p>
          {lang.lang === "en" ? "Phone: " : "Телефон: "}
          {vehicle?.driverPhoneNumber}
        </p>
      </div>
      <div className="button-container">
        <button
          className="info-btn"
          onClick={handleCall}
          disabled={vehicle.id === 0 ? true : false}
        >
          {lang.lang === "en" ? "Call" : "Позвонить"}
        </button>
        <button
          className="info-btn"
          onClick={handleSendMessage}
          disabled={vehicle.id === 0 ? true : false}
        >
          {lang.lang === "en" ? "Message" : "Написать"}
        </button>
      </div>
    </div>
  );
}
