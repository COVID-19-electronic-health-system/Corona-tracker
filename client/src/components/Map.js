import React from 'react';
import MapGL from 'react-map-gl'
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import NavBar from './NavBar';

const mapboxToken = process.env.MAPBOX_TOKEN

console.log(mapboxToken)


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 43.2994,
                longitude: -73.935242,
                zoom: 2,
                bearing: 0,
                pitch: 0
            }
        };
    }


    render() {

        return (
            <div>
                <Logo className="DiagnosticLogo" />
                <TextLogo className="DiagnosticTextLogo" />
                <h4>Check out the Map!</h4>
                <h4>...COMING SOON...</h4>
                <MapGL
                    {...this.state.viewport}
                    width="100vw"
                    height="100vh"
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    onViewportChange={viewport => this.setState({ viewport })}
                    mapboxApiAccessToken={mapboxToken}
                >
                </MapGL>
                <NavBar />
            </div>

        );
    }
}

export default Map