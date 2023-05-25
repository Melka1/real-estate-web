'use client'

import L from 'leaflet'
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'


import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:markerIcon.src,
  iconRetinaUrl:markerIcon2x.src,
  shadowUrl:markerShadow.src
})


const Map = ({
  center
}) => {
  return (
    <div id='map' style={{height:'100vh',position:'relative'}}>
      <MapContainer center={[51.505, -0.09]} zoom={20} scrollWheelZoom={false} style={{height:'100%'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{position:'absolute', width:'100%', top:'0', left:'0', display:'flex', gap:'2rem', padding:'2rem', zIndex:'2'}} >
        <button>Hi</button>
        <button>Hi</button>
        <button>Hi</button>
      </div>
    </div>
  )
}

export default Map