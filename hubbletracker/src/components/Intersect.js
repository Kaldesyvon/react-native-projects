import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Component} from 'react/cjs/react.production.min';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export default class Intersect extends Component {
    _isMounted = false;
    state = {
        user: {
            longitude: 0,
            latitude: 0,
        },
        hubble: [],
    };

    constructor() {
        super();
        this.getPosition();
    }

    getAllPositions() {
        if (this._isMounted) {
            this.getPosition();
            this.fetchHubbleCoords();
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.timerId = setInterval(() => this.getAllPositions(), 10000);
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.timerId);
    }

    async fetchHubbleCoords() {
        await fetch(
            `https://www.n2yo.com/sat/instant-tracking.php?s=20580&d=3000&tz=GMT%2001:00&O=n2yocom&rnd_str=9e9d3fdf83c6cc2ccf88eab0af8a5b27&callback=`,
        )
            .then(response => response.json())
            .then(response => {
                console.log(
                    'fetched: ' +
                        response.map(r =>
                            r.pos.map(r => r.d.split('|').slice(0, 2)),
                        )[0],
                );
                this.setState({
                    hubble: response.map(r =>
                        r.pos.map(r => r.d.split('|').slice(0, 2)),
                    )[0],
                });
                console.log('hubble will be at: ' + this.state.hubble);
            })
            .catch(e => console.log(e));
    }

    getPosition() {
        Geolocation.getCurrentPosition(
            position => {
                this.setState({
                    user: {
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                    },
                });
            },
            error => {
                console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
    }

    render() {
        return (
            <View style={{height: '100%'}}>
                <MapView
                    minHeight={400}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: 0,
                        longitude: 0,
                        latitudeDelta: 100,
                        longitudeDelta: 100,
                    }}>
                    {this.state.hubble.map((marker, index) => {
                        if (index === 0) {
                            return (
                                <Marker
                                    anchor={{
                                        x: 0.5,
                                        y: 0.5,
                                    }}
                                    icon={require('../images/hubble_icon.png')}
                                    key={index}
                                    coordinate={{
                                        longitude: parseFloat(marker[1]),
                                        latitude: parseFloat(marker[0]),
                                    }}
                                />
                            );
                        }
                        if (index % 100 === 0) {
                            return (
                                <Marker
                                    anchor={{
                                        x: 0.5,
                                        y: 0.5,
                                    }}
                                    key={index}
                                    icon={require('../images/yellow_icon.png')}
                                    coordinate={{
                                        longitude: parseFloat(marker[1]),
                                        latitude: parseFloat(marker[0]),
                                    }}
                                />
                            );
                        }
                    })}
                    <Marker
                        key={'user'}
                        coordinate={{
                            longitude: this.state.user.longitude,
                            latitude: this.state.user.latitude,
                        }}
                    />
                </MapView>
                {this.state.hubble.length === 0 &&
                    <Text style={styles.text}>Please, wait. Retrieving data.</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFill,
    },
    text:{
        position: 'absolute',
        zIndex: 2,
        bottom: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize:20,
        color: 'black'
    }
});
