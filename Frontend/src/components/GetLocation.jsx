import React, { Component } from 'react';



class GetLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
        };
    }

    position = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            err => console.log(err)
        );
        console.log(this.state.latitude);
    };

    render() {
        return (
            <div>
                <button onClick={this.position} className='Filter btn btn-dark'>Detect my location</button>
            </div>
        );
    }
}

export default GetLocation;