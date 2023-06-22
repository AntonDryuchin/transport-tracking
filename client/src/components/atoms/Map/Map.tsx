import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

type IMapProps = {
  id: number;
  category: string;
  driverName: string;
  driverPhoneNumber: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type MarkerOptions = {
  [key: string]: {
    icon: string;
  };
};

export default function Map(list: IMapProps[]) {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 59.9343, // Широта Санкт-Петербурга
    lng: 30.3351, // Долгота Санкт-Петербурга
  };

  const markerOptions: MarkerOptions = {
    легковые: {
      icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    },
    грузовые: {
      icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    },
    спецтехника: {
      icon: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
    },
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBJszuWBaaIOkvJ7pAt4a-ts3iDGgr-EIM">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {list.map((vehicle: IMapProps) => (
          <Marker
            key={vehicle.id}
            position={{
              lat: vehicle.location.latitude,
              lng: vehicle.location.longitude,
            }}
            icon={markerOptions[vehicle.category]?.icon}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
