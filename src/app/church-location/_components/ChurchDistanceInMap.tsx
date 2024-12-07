"use client";
import envConfig from "@/config/envConfig";
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useCallback, useState, useEffect } from "react";
import { toast } from "sonner";

// Define the type for the map instance
declare global {
  interface window {
    google: any;
  }
}

const ChurchDistanceInMap = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null); // Typing map state
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null); // For storing directions result

  const center = {
    lat: 23.765714,
    lng: 90.423007,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: envConfig?.mapKey as string,
  });

  // User's current location state
  const [userLocation, setUserLocation] = useState<google.maps.LatLng | null>(
    null
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(new google.maps.LatLng(latitude, longitude)); // Set user location
        },
        () => {
          toast.error("Could not get your location.");
        }
      );
    }
  }, []);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  // Calculate directions from current location to the target
  const calculateRoute = useCallback(() => {
    if (userLocation && map) {
      const directionsService = new google.maps.DirectionsService();
      const request: google.maps.DirectionsRequest = {
        origin: userLocation,
        destination: center, // Target location
        travelMode: google.maps.TravelMode.WALKING, // Can be changed to WALKING, BICYCLING, etc.
      };

      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result); // Set directions result
        } else {
          console.error("Error fetching directions: ", status);
        }
      });
    }
  }, [userLocation, map]);

  // Call calculateRoute whenever user location is available
  useEffect(() => {
    if (userLocation) {
      calculateRoute();
    }
  }, [userLocation, calculateRoute]);

  return isLoaded ? (
    <div className="flex-center min-h-[calc(100vh-280px)]">
      <GoogleMap
        mapContainerStyle={{ height: "550px", width: "100%" }}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center}></Marker>

        {/* DirectionsRenderer to show route on the map */}
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                strokeColor: "#303060",
                strokeWeight: 10,
                strokeOpacity: 0.7,
              },
            }}
          />
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default ChurchDistanceInMap;
