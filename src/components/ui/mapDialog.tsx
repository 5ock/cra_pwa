import React, { useEffect, useState, useRef } from 'react'
import ReactDOMServer from 'react-dom/server';
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet'
import _ from 'lodash'
import L, { LatLngBounds } from 'leaflet'
import 'leaflet/dist/leaflet.css'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import PlaceIcon from '@mui/icons-material/Place'
import Typography from '@mui/material/Typography'

import ChangeView from './changeView'

// type

interface IMapCenter {
  lat: number;
  lng: number;
}

const initMapCenter:IMapCenter = {
  lat: 23.762697,
  lng: 120.981334,
}

interface IGisMapMarkerDialog {
  mapUrl: string;
  onConfirm?: (position:string) => void;
  onClose: () => void; 
}

const MapDialog = (props: IGisMapMarkerDialog) => {
  const { mapUrl, onClose } = props

  const [ center, setCenter ] = useState<IMapCenter>(initMapCenter)
  const [ zoom, setZoom ] = useState<number>(15)

  const isMounted = useRef<boolean>(false)

  const maxBounds: LatLngBounds = new LatLngBounds(
    [11.587017, 115.169788], // Southwest coordinates
    [34.629829, 128.188476], // Northeast coordinates
  )
  
  const customMarkerIcon = L.divIcon({
    html: ReactDOMServer.renderToString( <PlaceIcon className="custom-icon" fontSize="large" />),
    className: '',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
  });

  const MapEvent = () => {
    useMapEvents({
      move: e => {
        let { lat, lng } = e.target.getCenter()  
        setCenter({lat: _.floor(lat, 6), lng: _.floor(lng, 6)})
      }
    })
    return null
  }

  const handleInitCenter = () => {
    // if(dataCenter) {
    //   setCenter(dataCenter)
    //   return setZoom(15)
    // }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const latAndLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        console.log(latAndLng)
        setCenter(latAndLng)
        setZoom(15)
      })
    }
  }

  useEffect(() =>{ 
    if(!isMounted.current) {
      handleInitCenter()
    }
  }, [])

  return (<Dialog open={true}>
    <Typography>
      {`lat: ${center.lat}, lng: ${center.lng}`}
    </Typography>
    <Box sx={{
      height: 'calc(100vh - 178px)',
      width: '80vw'
    }}>
      <MapContainer
        maxBounds={maxBounds}
        center={center}
        zoom={zoom}
        attributionControl={false}
        style={{height: 'inherit', width: 'inherit'}}>
        <ChangeView center={center} zoom={zoom} />
        <MapEvent />
        <TileLayer url={mapUrl}
          maxZoom={15}
          minZoom={5}/>
        <Marker position={center} icon={customMarkerIcon} />
      </MapContainer>
    </Box>
    <Button onClick={onClose}>close</Button>
  </Dialog>)
}

export default MapDialog