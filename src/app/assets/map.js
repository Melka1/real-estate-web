'use client'

import L from 'leaflet'
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'


import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useEffect } from 'react'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:markerIcon.src,
  iconRetinaUrl:markerIcon2x.src,
  shadowUrl:markerShadow.src
})


const Map = ({
  center
}) => {

  var map;
  var popup;
  var marker;
  useEffect(()=>{
    var map = L.map('map').setView([8.986564, 38.733759], 15);  
    var marker = L.marker([8.984986, 38.718669]).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>I am Melka.").openPopup();
    
    var popup = L.popup();
    popup.setLatLng

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
  },[])
  
  

  return (
    <div id='map' style={{height:'100vh',position:'relative', zIndex:0}}>
      {/* <MapContainer center={[8.98276372548611, 38.73423775438933]} zoom={15} scrollWheelZoom={false} style={{height:'100%'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[8.984986, 38.718669]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  )
}

export default Map