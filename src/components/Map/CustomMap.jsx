
import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import { useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import './map.css'

const CustomMap = ({google, location}) => {

    useEffect(() => {
        const reactToWindowResize = () => {
          setIsMobile(window.innerWidth <= 850);
        }
        window.addEventListener('resize', reactToWindowResize);
      });

    const handleMapClick = () => {
      if (location.address == 'riyadh') {
        window.open(`https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%A8%D9%82%D8%B3%D9%85%D8%A7%D8%B7%D9%8A+%D9%84%D9%84%D8%A3%D8%AC%D9%87%D8%B2%D8%A9+%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AD%D9%8A%D8%A9%E2%80%AD/@24.6687908,46.7283349,19.5z/data=!4m6!3m5!1s0x3e2f041552737aa7:0x73cfcf14fa60b0e5!8m2!3d24.6688358!4d46.7287286!16s%2Fg%2F11c70bdp0n`);
      } else if (location.address == 'khobar') {
        window.open('https://www.google.com/maps/place/Boksomatti+for+Surveying+Co.,+Makkah+Al+Mukarramah+St,+Al-Thuqbah,+Intersection+4th+St.+with+Mecca+St.+%D8%AA%D9%82%D8%B7%D8%B9+%D8%A7%D9%84%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9+%D9%85%D8%B9,+Al+Khobar%E2%80%AD/data=!4m2!3m1!1s0x3e49e93c3445a169:0xcccb8587a77deb7d?utm_source=mstt_1&entry=gps&lucs=47062708&g_ep=CAESCTExLjY4LjcwMBgAIIgnKgg0NzA2MjcwOEICU0E%3D')
      } else {
        window.open('https://www.google.com/maps/place/21.539664,39.191978/data=!4m6!3m5!1s0!7e2!8m2!3d21.5396638!4d39.1919785?utm_source=mstt_1&entry=gps&lucs=47062708&g_ep=CAESCTExLjY4LjcwMBgAIIgnKgg0NzA2MjcwOEICU0E%3D')
      }
        
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

    return (
      <Map
          google={google}
          containerStyle={{
              width: isMobile ? "90%" : "30vw",
              height: "40vh",
              position: "relative",
              marginLeft: isMobile ? "0vw" : "3vw",
              marginRight: isMobile ? "auto" : "3vw"
          }}
          style={{
              width: isMobile ? "100%" : "30vw",
              height: "30vh"
          }}
          center={location}
          initialCenter={location}
          zoom={18}
          disableDefaultUI={true}
          onClick={handleMapClick}

      >
        <Marker mapCenter={{lat: location.lat, lng: location.lng}}></Marker>

      </Map>
  )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(CustomMap);