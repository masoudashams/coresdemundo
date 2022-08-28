import React from "react";
import ol from "openlayers";
import { layer, Map, Layers } from "react-openlayers";

var resolutions = [];
var matrixIds = [];
var proj3857 = ol.proj.get("EPSG:3857");
var maxResolution = ol.extent.getWidth(proj3857.getExtent()) / 256;

for (var i = 0; i < 18; i++) {
  matrixIds[i] = i.toString();
  resolutions[i] = maxResolution / Math.pow(2, i);
}

var tileGrid = new ol.tilegrid.WMTS({
  origin: [6435522, 986623],
  resolutions: resolutions,
  matrixIds: matrixIds
});

var ign_source = new ol.source.OSM({
  url: "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
});

const MyMap = () => (
  <div className="w-full min-h-[400px]">
    <Map view={{ center: [0, 0], zoom: 2, }}>
      <Layers>
        <layer.Tile />
      </Layers>
    </Map>
  </div>
);

export default MyMap;