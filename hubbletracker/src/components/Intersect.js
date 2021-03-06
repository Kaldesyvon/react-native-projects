import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useTranslation} from 'react-i18next';

export default function Intersect() {
    const {t, i18n} = useTranslation();

    const [userCoords, setUserCoords] = useState({});

    const [hubbleCoords, setHubbleCoords] = useState([]);

    useEffect(() => {
        getPosition();
        const interval = setInterval(() => fetchHubbleCoords(), 10000);
        return () => clearInterval(interval);
    }, []);

    const getPermissions = async () => {
        try {
            if (Platform.OS === 'android') {
                await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: t('Allow GPS'),
                        message: t(
                            'For better experience allow GPS, so you can see when will Hubble will be above you',
                        ),
                        buttonNeutral: t('Ask me later'),
                        buttonNegative: t('Cancel'),
                        buttonPositive: 'OK',
                    },
                );
                Promise.resolve()
            }
        } catch (e) {
            console.warn(e);
        }
    };

    const fetchHubbleCoords = async () => {
        console.log('am about to fetch');
        await fetch(
            `https://www.n2yo.com/sat/instant-tracking.php?s=20580&d=3000&tz=GMT%2001:00&O=n2yocom&rnd_str=9e9d3fdf83c6cc2ccf88eab0af8a5b27&callback=`,
        )
            .then(response => response.json())
            .then(response => {
                setHubbleCoords(
                    response.map(r =>
                        r.pos.map(r => r.d.split('|').slice(0, 2)),
                    )[0],
                );
            })
            .catch(e => console.log(e));
    };

    const getPosition = async () => {
        await getPermissions()
        Geolocation.getCurrentPosition(
            position => {
                setUserCoords({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                });
            },
            error => {
                console.log('nedam')
                console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
    };

    const showUserPos = () => {
        if (
            userCoords.hasOwnProperty('longitude') &&
            userCoords.hasOwnProperty('latitude')
        ) {
            return (
                <Marker
                    key={'user'}
                    coordinate={{
                        longitude: userCoords.longitude,
                        latitude: userCoords.latitude,
                    }}
                />
            );
        }
    };

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
                {hubbleCoords.map((marker, index) => {
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
                    } else {
                        return;
                    }
                })}
                {showUserPos()}
            </MapView>
            {hubbleCoords.length === 0 && (
                <Text style={styles.text}>
                    {t('Please, wait. Retrieving data.')}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFill,
    },
    text: {
        position: 'absolute',
        zIndex: 2,
        bottom: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
});
