import React from "react";
import { layer, Map, Layers } from "react-openlayers";

const MyMap = () => (
  <div className="w-full flex items-center justify-center min-h-[400px]">
    <Map view={{ center: [120, 120], zoom: 5, }}>
      <Layers >
        <layer.Tile />
      </Layers>
    </Map>
  </div>
);

export default MyMap;