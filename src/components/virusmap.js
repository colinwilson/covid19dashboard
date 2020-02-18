import React, { Component } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import mapDataIE from "@highcharts/map-collection/custom/world-highres2.geo.json";

if (typeof Highcharts === 'object') {
  highchartsMap(Highcharts); // Initialize the map module
}

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

class Covid19Map extends Component {constructor(){
  super();
  this.state = {
      data : []
     }
  }

  async componentDidMount(){
  let res = await axios.get('/api/get-all-cases');
  const data = res.data;
  this.setState({data})
  }

  render() {
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
          name: "Confirmed Cases",
          color: "#4169E1",
          data: this.state.data,
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

  return (
  <div>
    <HighchartsReact
      constructorType={"mapChart"}
      highcharts={Highcharts}
      options={mapOptions}
    />
  </div>);
  }}

  export default Covid19Map;
