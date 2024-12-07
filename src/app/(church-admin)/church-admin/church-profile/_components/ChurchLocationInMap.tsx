"use client";
import envConfig from "@/config/envConfig";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

// Define the type for the map instance
declare global {
  interface window {
    google: any;
  }
}

const ChurchLocationInMap = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null); // Typing map state

  const center = {
    lat: 23.765714,
    lng: 90.423007,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: envConfig?.mapKey as string,
  });

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: "350px", width: "100%" }}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center}></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default ChurchLocationInMap;
