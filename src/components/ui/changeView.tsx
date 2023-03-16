import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

interface ICenter {
    lat: number;
    lng: number;
}
interface IChangeViewProps {
    center: ICenter;
    zoom: number;
}

const ChangeView = (props: IChangeViewProps) => {
    const { center } = props
    const map = useMap()

    useEffect(() => {
        map.setView(center, undefined, {animate: false})
    }, [map, center])

    return null
}
export default ChangeView