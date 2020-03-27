import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from "mapbox-gl";
import NavBar from './NavBar';
import '../css/Map.css'

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN


const styles = {
    width: "100vw",
    height: "calc(100vh - 80px)",
    position: "absolute"
};


function Map() {

    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);


    useEffect(() => {
        mapboxgl.accessToken = mapboxToken;

        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/dark-v9", // stylesheet location
                center: [-73.935242, 43.2994],
                zoom: 2
            });

            map.on("load", () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);


    return (
        <div className="mapContainer">
            <h4>Check out the Map!</h4>
            <h4>...COMING SOON...</h4>
            <div ref={el => (mapContainer.current = el)} style={styles} />
            <NavBar />
        </div>

    )
};


export default Map;