// import React from 'react'
// import {

//     GoogleMap, useJsApiLoader
// }

//     from "@react-google-maps/api";


// import { useState } from "react";

// const API_KEY = "AIzaSyDfg0reDWEUTTW7hzm5NsjT1jFNQbKe27Y";


// const mapContainerStyle =
// {
//     width: "400px",
//     height: "500px",
// }


// const Mymap = () => {
//     //useEffect
//     const [aa, setAa] = useState({});
//     const { isLoaded, loadError } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: API_KEY
//     });

//     // const [map, setMap] = React.useState(null)

//     // const onLoad = React.useCallback(function callback(map) {
//     //     const bounds = new window.google.maps.LatLngBounds();
//     //     map.fitBounds(bounds);
//     //     setMap(map)
//     // }, []);

//     // const onUnmount = React.useCallback(function callback(map) {
//     //     setMap(null)
//     // }, [])
//     let a = [];


//     function showPosition(position) {
//         console.log("Show Positon Function is running")
//         a[0] = position.coords.latitude;
//         a[1] = position.coords.longitude;
//         setAa({ lat: Number(a[0]), lng: Number(a[1]) })
//     }

//     function getLocation() {
//         if (navigator.geolocation) {
//             console.log("Get-Location Function running \n");
//             navigator.geolocation.getCurrentPosition(showPosition);
//         } else {
//             console.log(" Geolocation is not supported by this browser. ");
//         }
//     }


//     function handleMapClick() {
//         getLocation();
//     }

//     const myCenter = { ...aa }
//     // console.log(center);
//     // console.log(obj_location);

//     const myCenter2 = {
//         lat: 13,
//         lng: 77
//     }
//     if (loadError) {
//         return ("Loading Error : Error Loading the map");
//     }
//     else if (!isLoaded) {
//         console.log("Laoding Maps . . . ")
//     }


//     return (
//         <div className="map">
//             <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 zoom={18}
//                 center={myCenter2}
//             />
//             {/* <button onClick={handleMapClick}>Click me to see the Location</button> */}
//         </div>
//     );
// }

// export default Mymap;

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    constructor(props) {
        super(props);
        this.handlebtnClick = this.handlebtnClick.bind(this);
    }
    handlebtnClick() {
        console.log("I', Clicked ");
    }
    static defaultProps = {
        center: {
            lat: 13.95,
            lng: 77.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '520px', width: '430px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDfg0reDWEUTTW7hzm5NsjT1jFNQbKe27Y" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={0.955413}
                        lng={0.337844}
                    />
                </GoogleMapReact>
                <form action="/auth">
                    <button onClick={this.handlebtnClick} className="attn-sub-btn" type="submit">GIVE ATTENDENCE</button>
                </form>
            </div>
        );
    }
}

export default SimpleMap;