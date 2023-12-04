"use client";
import React from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";

import "leaflet/dist/leaflet.css";

// Define the type for your data
// interface DataPoint {
//   latitude: string;
//   longitude: string;
// }

// Define the props for the ChicagoMap component
// interface ChicagoMapProps {
//   data: DataPoint[];
// }

const ChicagoMap: React.FC<any> = ({ data }) => {
  return (
    <div>
      <div>
        <p>In the last 10 years, Chicago has had 50000 crashes.</p>
      </div>
      <MapContainer
        center={[41.8781, -87.6298]}
        scrollWheelZoom={true}
        zoom={10}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data?.map(
          (dataPoint: any, index: any) =>
            dataPoint?.latitude &&
            dataPoint?.longitude && (
              <CircleMarker
                key={index}
                center={[
                  parseFloat(dataPoint?.latitude),
                  parseFloat(dataPoint?.longitude),
                ]}
                pathOptions={{ color: "red" }}
              >
                {/* <Popup>
            A marker for data point at {dataPoint.latitude},{" "}
            {dataPoint.longitude}
          </Popup> */}
              </CircleMarker>
            )
        )}
      </MapContainer>
    </div>
  );
};

export default ChicagoMap;
