import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js"
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
import { useEffect } from 'react';


function App() {
function mapa(){

  esriConfig.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";
    // const containerMap = useRef();
  
    const map = new Map({
      basemap: "arcgis-streets-night"  // Basemap layer service // hay varias bases
    });
  
    const view = new MapView({
      map: map,
      center: [ -74.1031707204775,4.686182163946811],
      zoom: 10,
      container:"map"
    });
}
  mapa()

  useEffect(() => {
    mapa()
},[]);


  return (

    <>
    <link rel="stylesheet" href="https://js.arcgis.com/4.26/esri/themes/light/main.css"></link>
      <div id="map" >
        
      </div>
   

    </>
  )
}

export default App
