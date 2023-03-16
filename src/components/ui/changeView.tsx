import React, { useRef, useEffect } from 'react'
import { useMap } from 'react-leaflet'
import _ from 'lodash'

interface ICenter {
    lat: number;
    lng: number;
}
interface IChangeViewProps {
    center: ICenter;
    zoom: number;
}

const ChangeView = (props: IChangeViewProps) => {
    const { center, zoom } = props
    const map = useMap()

    useEffect(() => {
        map.setView(center, undefined, {animate: false})
    }, [JSON.stringify(center)])

    return null
}
export default ChangeView