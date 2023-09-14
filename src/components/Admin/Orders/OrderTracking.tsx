import MapFullScreen from "@src/components/UI/FullScreen/MapFullScreen";
import maplibre, { GeolocateControl, Marker, NavigationControl, Popup } from "maplibre-gl";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";


const OrderTracking = () => {

    const router = useRouter();
    const { query } = useRouter();

    let mapContainer: any;
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

        const map = new maplibre.Map({
            container: mapContainer,
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

    }, [mapContainer]);

    return (
        <>
            {query.fullscreen && <MapFullScreen />}
            <div className="w-full h-fit shadow-lg p-6 bg-white rounded-md">
                <h1 className="text-xl font-medium text-dark-gray">Track Order</h1>
                <div className="map-container h-[27rem] w-full bg-whit" ref={el => mapContainer = el}></div>
                <Link className="" href={{ pathname: router.pathname, query: { ...query, fullscreen: true } }}>
                    <div className="p-3 w-fit bg-dark-gray rounded-md shadow-md relative ml-auto mr-0">
                        <BsArrowsFullscreen className="text-white text-xl" />
                    </div>
                </Link>
            </div>
        </>
    )
}


export default OrderTracking; 