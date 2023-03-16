import React, { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
// import { LatLngBounds } from 'leaflet'
import _ from 'lodash'

import 'leaflet/dist/leaflet.css'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'

interface IMapCenter {
  lat: number;
  lng: number;
}
interface IGisMapMarkerDialog {
  mapUrl: string;
  onConfirm?: (position:string) => void;
  onClose: () => void; 
}

const MapDialog = (props: IGisMapMarkerDialog) => {
  const { mapUrl, onClose } = props

  const [ center, setCenter ] = useState<IMapCenter>({ lat: 10, lng: 10})
  // const [ zoom, setZoom ] = useState<number>(7)

  const isMounted = useRef<boolean>(false)
  // const bounds: LatLngBounds = new LatLngBounds(
  //   [51.505, -0.09], // Southwest coordinates
  //   [51.52, -0.065], // Northeast coordinates
  // )
  const MapEvent = () => {
    useMapEvents({
      zoomlevelschange: e => {
        let { _southWest: latLngStart,  _northEast: latLngEnd } = e.target.getBounds()
          // setMapBounds({latLngStart, latLngEnd})
        console.log({_southWest: latLngStart,  _northEast: latLngEnd})
      },
      zoomend: e => {
        console.log(e.target.getZoom())
          // dispatch(setCurrentZoom(e.target.getZoom()))
      },
      moveend: e => {
        let { _southWest: latLngStart,  _northEast: latLngEnd} = e.target.getBounds()
          // setMapBounds({latLngStart, latLngEnd})
        let { lat, lng} = e.target.getCenter()

        setCenter({lat: _.floor(lat, 6), lng: _.floor(lng, 6)})
        console.log({_southWest: latLngStart,  _northEast: latLngEnd})
      }
    })
    return null
  }

  useEffect(() =>{ 
    if(!isMounted.current) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          const latAndLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          setCenter(latAndLng)
          // dispatch(setCurrentZoom(gisMapInitViewZoom))
          // dispatch(setMapArea(''))
        })
      }
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
        // bounds={bounds}
        center={{
          lat: 22.094681288189726,
          lng: 120.74705262734024,
        }}
        zoom={7}
        attributionControl={false}
        style={{height: 'inherit', width: 'inherit'}}>
        <MapEvent />
        <TileLayer url={mapUrl}
          maxZoom={13}
          minZoom={7}/>
      </MapContainer>
    </Box>
    <Button onClick={onClose}>close</Button>
  </Dialog>)
}

export default MapDialog