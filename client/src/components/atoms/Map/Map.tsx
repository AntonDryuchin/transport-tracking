import React, { useEffect } from "react";
import "./Map.css";
import { MapProps } from "../../../types";

export default function Map({ list }: MapProps) {
  useEffect(() => {
    //функция инициализации карты
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map")!, {
        center: { lat: 59.93139, lng: 30.36019 }, //выбор точки центра
        zoom: 11, //выбор уровня увеличения
      });

      // цикл для создания маркеров в зависимости от категории ТС
      list.forEach((item) => {
        let icon;
        switch (item.category) {
          case "Легковые":
            icon = "/icons/car-icon.svg";
            break;
          case "Грузовые":
            icon = "/icons/truck-icon.svg";
            break;
          case "Спецтранспорт":
            icon = "/icons/excavator-icon.svg";
            break;
          default:
            icon = "";
        }
        //создание маркера и заполнение его настроек
        const marker = new window.google.maps.Marker({
          position: {
            lat: item.location.latitude,
            lng: item.location.longitude,
          },
          map,
          title: item.driverName,
          icon: {
            url: icon,
            scaledSize: new window.google.maps.Size(20, 20),
          },
        });
      });
    };
    //проверка наличия объектов google и google.maps в глобальной области видимости
    if (window.google && window.google.maps) {
      //ини циализация карты, если уже загружены объекты google и google.maps
      initMap();
    } else {
      // загрузка Google Maps API, если он еще не загружен
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBJszuWBaaIOkvJ7pAt4a-ts3iDGgr-EIM&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.onerror = () => {
        throw new Error("Failed to load Google Maps API");
      };
      (window as any).initMap = initMap; // глобальная функция initMap для вызова после загрузки API
      document.head.appendChild(script); // добавление скрипта в заголовок html документа
    }
    // [list] - устанавливает зависимость эффекта от списка ТС
  }, [list]);
  //параметры отображения карты
  return <div id="map" style={{ height: "400px", width: "600px" }} />;
}
