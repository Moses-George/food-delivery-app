import Link from "next/link";
import { useEffect, useState } from "react";
import PaymentOptions from "../UI/Modals/PaymentOptions/PaymentOptions";
import maplibre from 'maplibre-gl';
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from "@geoapify/react-geocoder-autocomplete";


const Map = () => {

    const [showOptions, setShowOptions] = useState(false);
    const [slideUp, setSlideUp] = useState(false);
    const [placeData, setPlaceData] = useState({ lat: 49, lng: 11, zoom: 4 });

    const openPaymentOptionsModal = () => {
        setSlideUp(false);
        setShowOptions(true);
    }

    const onPlaceSelect = (value: GeoJSON.Feature) => {
        console.log(value);
        if (value) {
            const latitude = value.properties?.lat;
            const longitude = value.properties?.lon;
            setPlaceData({ lat: latitude, lng: longitude, zoom: 15 });
        }
    }

    const onSuggestionChange = () => {
        console.log("")
    }

    let mapContainer: any;
    const myAPIKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;

    useEffect(() => {
        const mapStyle = process.env.NEXT_PUBLIC_GEOAPIFY_MAP_STYLE_URL;

        // const initialState = {
        //     lng: 11,
        //     lat: 49,
        //     zoom: 4
        // };

        const map = new maplibre.Map({
            container: mapContainer,
            style: `${mapStyle}?apiKey=${myAPIKey}`,
            center: [placeData.lng, placeData.lat],
            zoom: placeData.zoom
        });

    }, [mapContainer, placeData]);

    return (
        <>
            {/* <PaymentOptions slideUp={slideUp} setSlideUp={setSlideUp} showOptions={showOptions} setShowOptions={setShowOptions} /> */}
            <div className="justify-self-end h-full w-full shadow-lg">
                <GeoapifyContext apiKey={myAPIKey} className="mx-auto w-full h-full" >
                    <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
                        value=""
                        placeSelect={onPlaceSelect}
                        suggestionsChange={onSuggestionChange}
                    />
                </GeoapifyContext>
                <div className="map-container h-full w-full" ref={el => mapContainer = el}></div>
            </div>
        </>
    )
}

export default Map;