import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import mapDataIE from "@highcharts/map-collection/custom/world-highres2.geo.json";
highchartsMap(Highcharts); // Initialize the map module

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

const data = [{
    z: 10,
    name: 'London',
    lat: 51.507222,
    lon: -0.1275
}, {
    z: 20,
    name: 'Birmingham',
    lat: 52.483056,
    lon: -1.893611
}, {
    z: 50,
    name: 'Leeds',
    lat: 53.799722,
    lon: -1.549167
}];

const data2 = [{"z":1,"name":"Macau","lat":22.210928,"lon":113.552971},{"z":3,"name":"Shanghai","lat":231.224361,"lon":121.46917},{"z":9,"name":"Guangdong","lat":23.24,"lon":113.3},{"z":3,"name":null,"lat":35.8617,"lon":104.1954},{"z":5,"name":"Zhejiang","lat":29.1416,"lon":119.7889},{"z":2,"name":"Zhejiang","lat":29.1416,"lon":119.7889},{"z":2,"name":"Tianjin","lat":39.3434,"lon":117.3616},{"z":2,"name":"Liaoning","lat":41.9437,"lon":122.529},{"z":103,"name":"Hubei","lat":30.7378,"lon":112.2384},{"z":2,"name":"Hubei","lat":30.7378,"lon":112.2384},{"z":1,"name":"Anhui","lat":30.6007,"lon":117.9249},{"z":1,"name":null,"lat":22.3193,"lon":114.1694},{"z":4,"name":"Hainan","lat":19.5664,"lon":109.9497},{"z":1,"name":"Fujian","lat":26.4837,"lon":117.9249},{"z":1,"name":"Guizhou","lat":26.843,"lon":107.2903},{"z":3,"name":"Hunan","lat":27.6253,"lon":111.8569},{"z":1,"name":"Chongqing","lat":29.4316,"lon":106.9123},{"z":3,"name":"Sichuan","lat":30.2638,"lon":102.8055},{"z":1,"name":"Shanxi","lat":37.2426,"lon":111.8569},{"z":1,"name":"Ningxia","lat":37.1987,"lon":106.1581},{"z":2,"name":"Guangxi","lat":23.7248,"lon":108.8076},{"z":4,"name":"Henan","lat":34.2904,"lon":113.3824},{"z":1,"name":"Shandong","lat":35.894,"lon":117.9249},{"z":69,"name":"Hubei","lat":30.7378,"lon":112.2384},{"z":8,"name":"Hubei","lat":30.7378,"lon":112.2384},{"z":1,"name":"Hebei","lat":37.8957,"lon":114.9042},{"z":4,"name":"Bejing","lat":39.9042,"lon":116.4074},{"z":1,"name":"Jiangsu","lat":33.1402,"lon":119.7889},{"z":1,"name":"Heilongjiang","lat":47.1216,"lon":128.7382},{"z":3,"name":"Guangxi","lat":23.7248,"lon":108.8076},{"z":116,"name":null,"lat":35.8617,"lon":104.1954},{"z":329,"name":null,"lat":35.8617,"lon":104.1954},{"z":6,"name":null,"lat":35.8617,"lon":104.1954}]

console.log(data)

const mapOptions = {
  chart: {
    map: "custom/world-highres2",
    height: (9 / 16 * 100) + '%' // 16:9 ratio
  },
  title: {
    text: undefined
  },
  credits: {
    enabled: false
  },
  mapNavigation: {
    enabled: true
  },
  tooltip: {
    headerFormat: "",
    pointFormat: "{point.name}<br>lat: {point.lat}, lon: {point.lon}"
  },
  series: [
    {
      // Use the gb-all map with no data as a basemap
      name: "Basemap",
      mapData: mapDataIE,
      borderColor: "#A0A0A0",
      nullColor: "rgba(200, 200, 200, 0.3)",
      showInLegend: false
    },
    {
      // Specify points using lat/lon
      type: "mapbubble",
      name: "Locations",
      color: "#4169E1",
      data: data,
      cursor: "pointer",
      point: {
        events: {
          click: function() {
            console.log(this.name);
          }
        }
      }
    }
  ]
};

const App = () => (
  <div>
    <HighchartsReact
      constructorType={"mapChart"}
      highcharts={Highcharts}
      options={mapOptions}
    />
  </div>
);

export default App
