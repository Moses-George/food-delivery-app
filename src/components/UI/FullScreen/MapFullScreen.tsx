import Backdrop from "../Backdrop/Backdrop";
import maplibre, { GeolocateControl, Marker, NavigationControl } from "maplibre-gl";
import { useEffect, useRef, useState } from "react";
import React from "react";
import dynamic from "next/dynamic"; 

const Portal = dynamic(() => import("@src/components/Portal/Portal"), {
     ssr: false
})


const MapFullScreen = () => { 

    const [mapp, setMapp] = useState();

    const  mapContainer = useRef<HTMLDivElement>(null); 
    const myAPIKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY; 

    const geolocate = new GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });


    useEffect(() => { 
        const mapStyle = process.env.NEXT_PUBLIC_GEOAPIFY_MAP_STYLE_URL;

        const initial = { lat: 49, lng: 11, zoom: 4 }

        // if (!mapContainer.current) return ;
        if (mapContainer.current) {
            const map = new maplibre.Map({
                container: mapContainer.current,
                style: `${mapStyle}?apiKey=${myAPIKey}`,
                center: [initial.lng, initial.lat],
                zoom: initial.zoom
            });

            new Marker({
                color: "#000",
                draggable: true
            }).setLngLat([initial.lng, initial.lat]).addTo(map);
    
            map.addControl(geolocate);
    
            geolocate.on('geolocate', () => console.log('A geolocate event has occured'));
    
            map.addControl(new NavigationControl());
            // setMapp(map);
        }

    }, [mapContainer])

    return ( 
        <Portal selector="#portal-root"> 
            <Backdrop />
            <div className="justify-self-center top-4 fixed  z-[9999] w-[95%] h-[95%] bg-whte rounded-md">
                <div className="map-container h-full w-full" ref={mapContainer}></div>
            </div>
         </Portal>
    )
}

export default MapFullScreen;