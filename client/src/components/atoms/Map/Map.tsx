import React, { useEffect } from "react";
import "./Map.css";
import { MapProps } from "../../../types";

export default function Map({ list }: MapProps) {
  //   console.log(list);
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map")!, {
        center: { lat: 59.93139, lng: 30.36019 },
        zoom: 11,
      });

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

    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Загрузка Google Maps API, если он еще не загружен
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBJszuWBaaIOkvJ7pAt4a-ts3iDGgr-EIM&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.onerror = () => {
        throw new Error("Failed to load Google Maps API");
      };
      (window as any).initMap = initMap; // Глобальная функция initMap
      document.head.appendChild(script);
    }
  }, [list]);

  return <div id="map" style={{ height: "400px", width: "600px" }} />;
}
