import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

function PropertyMap({ lat, lng }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="h-[400px] rounded-xl overflow-hidden mt-10">
      <GoogleMap
        center={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
        zoom={14}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={{ lat: parseFloat(lat), lng: parseFloat(lng) }} />
      </GoogleMap>
    </div>
  );
}

export default PropertyMap;
