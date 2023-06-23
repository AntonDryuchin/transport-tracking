import React, { useEffect } from "react";

interface MapProps {
  list: {
    id: number;
    category: string;
    driverName: string;
    driverPhoneNumber: string;
    location: {
      latitude: number;
      longitude: number;
    };
  }[];
}

const Map: React.FC<MapProps> = ({ list }) => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map")!, {
        center: { lat: 59.93139, lng: 30.36019 }, // Координаты станции метро Александра Невского 1
        zoom: 11,
      });

      list.forEach((item) => {
        const marker = new window.google.maps.Marker({
          position: {
            lat: item.location.latitude,
            lng: item.location.longitude,
          },
          map,
          title: item.driverName,
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

  return <div id="map" style={{ height: "400px" }} />;
};

export default Map;
