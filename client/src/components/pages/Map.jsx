import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { makeStyles } from '@material-ui/core/styles';

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: 'calc(100vh - 80px)',
    position: 'absolute',
    scroll: 'hidden',
  },
  mapContainer: {
    paddingTop: '3vh',
    textAlign: 'center',
    height: '100vh',
  },
});

function Map() {
  const classes = useStyles();

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const initializeMap = () => {
      const initMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v9', // stylesheet location
        center: [-73.935242, 43.2994],
        zoom: 2,
      });

      initMap.on('load', () => {
        setMap(initMap);
        initMap.resize();
      });
    };

    if (!map) initializeMap();
  }, [map]);

  return (
    <div className={classes.mapContainer}>
      <h4>Check out the Map!</h4>
      <h4>...COMING SOON...</h4>
      <div
        ref={el => {
          mapContainer.current = el;
        }}
        className={classes.root}
      />
    </div>
  );
}

export default Map;
