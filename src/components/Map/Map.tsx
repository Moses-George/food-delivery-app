import Link from "next/link";
import { useEffect, useState } from "react";
import PaymentOptions from "../UI/Modals/PaymentOptions/PaymentOptions";
import maplibre, { Marker, Popup, NavigationControl, GeolocateControl } from 'maplibre-gl';
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from "@geoapify/react-geocoder-autocomplete";
import { FaPlus } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";


const Map = () => {

    const [showOptions, setShowOptions] = useState(false);
    const [slideUp, setSlideUp] = useState(false);
    const [placeData, setPlaceData] = useState({ lat: 49, lng: 11, zoom: 4 });
    const [address, SetAddress] = useState("xxx-xxx-xxx-xxx");

    const openPaymentOptionsModal = () => {
        setSlideUp(false);
        setShowOptions(true);
    }

    const geolocate = new GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });

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

        const map = new maplibre.Map({
            container: mapContainer,
            style: `${mapStyle}?apiKey=${myAPIKey}`,
            center: [placeData.lng, placeData.lat],
            zoom: placeData.zoom
        });

        new Marker({
            color: "#000",
            draggable: true
        }).setLngLat([placeData.lng, placeData.lat]).addTo(map);

        map.addControl(geolocate);

        geolocate.on('geolocate', () => console.log('A geolocate event has occured'));

        map.addControl(new NavigationControl());

        map.on("click", function (e) {
            const coordinate: any = [e.lngLat.lng, e.lngLat.lat];
            console.log(coordinate);

            // on small zoom level it could happen that a location is present multiple times on the map
            while (Math.abs(e.lngLat.lng - coordinate[0]) > 100) {
                coordinate[0] += e.lngLat.lng > coordinate[0] ? 360 : -360;
            }

            fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${coordinate[1]}&lon=${coordinate[0]}&apiKey=${myAPIKey}`)
                .then(response => response.json())
                .then(result => {
                    if (result.features.length) {
                        const address = result.features[0].properties.formatted;
                        SetAddress(address);
                        new Popup().setLngLat(coordinate).setHTML(address).addTo(map);
                    } else {
                        new Popup().setLngLat(coordinate).setHTML("No address found").addTo(map);
                    }
                })
        })

    }, [mapContainer, placeData]);

    return (
        <>
            <PaymentOptions slideUp={slideUp} setSlideUp={setSlideUp} showOptions={showOptions} setShowOptions={setShowOptions} />
            <div className="flex flex-col justify-self-end h-full w-full shadow-lg sm:h-[35rem]">
                <GeoapifyContext apiKey={myAPIKey} className="mx-auto w-full h-full" >
                    <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
                        value=""
                        placeSelect={onPlaceSelect}
                        suggestionsChange={onSuggestionChange}
                    />
                </GeoapifyContext>
                <div className="map-container h-full w-full" ref={el => mapContainer = el}></div>
                <div className="w-[100%] bg-white p-3 shadow-md rounded-md mx-uto -t-40">
                    <div className="items-center flex justify-between border-b-2 pb-3 ">
                        <div className="text-medium-gray">{address}</div>
                        <button className="p-3 bg-dark-peach rounded-full shadow-md">
                            <FaPlus className="text-white text-lg" />
                        </button>
                    </div>
                    <button onClick={openPaymentOptionsModal} className="flex items-center bg-dark-peach py-2 px-4 rounded-md shadow-md mt-3 gap-x-2">
                        <span className="text-md text-white font-semibold">Checkout</span>
                        <MdShoppingCartCheckout className="text-white text-xl" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Map;