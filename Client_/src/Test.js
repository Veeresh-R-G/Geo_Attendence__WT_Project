import React from 'react';
import { geolocated } from 'react-geolocated';

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = { lat: 0, long: 0, API_KEY: "AIzaSyDfg0reDWEUTTW7hzm5NsjT1jFNQbKe27Y" };
        this.updateState = this.updateState.bind(this)
        //problem i didn't bind it and now I binded StackOverflow OP
        this.getCoord = this.getCoord.bind(this);
    }


    updateState() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoord);
        }
    }


    getCoord(position) {
        this.setState({
            lat: (position.coords.latitude),
            long: (position.coords.longitude)
        })
    }


    handleLocationError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
            default:
                console.log(`Sorry, we are out of ${1}.`);

        }
    }
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) :
            <div>
                hello world <br />
                <h1>Current Coordinates are : {this.state.lat} and {this.state.long}</h1>
                <button onClick={this.updateState}>Click Me </button>
                {
                    (this.state.long && this.state.lat) ?
                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&size=100x100&key=YOUR_API_KEY`}
                            alt='myMap'></img> : null

                }
            </div>
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Test);