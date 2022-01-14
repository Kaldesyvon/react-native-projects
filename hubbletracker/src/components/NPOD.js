import React, {useEffect, useState, useReducer} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
    Linking,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob';
import {useTranslation} from 'react-i18next';

// function useForceUpdate(){
//     const [value, setValue] = useState(0); // integer state
//     return () => setValue(value => value + 1); // update the state to force render
// }

export default function NPOD() {
    const {t, i18b} = useTranslation();
    const pathToImage = '/storage/emulated/0/Pictures/hubbletracker/NPOD.jpg';
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [state, setState] = useState({
        title: '',
        date: '',
        copyright: '',
        url: '',
        explanation: '',
        hdurl: '',
    });

    useEffect(() => {
        getPermisions();
        getDataAndSetState('apod');
        async function fetchPicture() {
            await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=zagIQUrOh1phJr6NEDIF9uv6BPPTn9QPTO3ebgsO',
            )
                .then(response => response.json())
                .then(responseJson => {
                    storeData('apod', responseJson);
                    savePicture(responseJson.url);
                })
                .catch(error => console.error('fetch error ' + error));
            console.log('data fetched');
        }
        fetchPicture();
    }, []);

    const storeData = async (key, value) => {
        try {
            const storedKey = await AsyncStorage.getItem(key);
            if (storedKey) {
                await AsyncStorage.mergeItem(key, JSON.stringify(value));
            } else {
                await AsyncStorage.setItem(key, JSON.stringify(value));
            }
        } catch (e) {
            console.error('error storing data' + e);
        }
        console.log('data stored');
    };

    const getDataAndSetState = async key => {
        try {
            const value = await AsyncStorage.getItem(key);
            setState(JSON.parse(value));
        } catch (e) {
            console.error('error getting data' + e);
        }
    };

    const savePicture = async image_URL => {
        await getPermisions();
        await RNFetchBlob.config({
            path: pathToImage,
            overwrite: true,
        })
            .fetch('GET', image_URL)
            .then(res => {
                console.log('The file saved to', res.path());
            })
            .catch(e => console.log(e));

        // forceUpdate();
    };

    const getPermisions = async () => {
        if (Platform.OS === 'android') {
            console.log('pytam sa o permisie v sustakoch');
            granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            ]);
            Promise.resolve();
            // granted = await PermissionsAndroid.request(
            //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            //     {
            //         title: t('Allow write to storage'),
            //         message: t(
            //             'For better experience allow Storage write, so you can tommorow see what picture NASA has chosen today',
            //         ),
            //         buttonNeutral: t('Ask me later'),
            //         buttonNegative: t('Cancel'),
            //         buttonPositive: 'OK',
            //     },
            // );
        }
    };

    console.debug('renderrer');
    return (
        <ScrollView style={{marginLeft: 10}}>
            <View>
                <Text style={styles.title}>{state.title}</Text>
                <Text style={styles.date}>{state.date}</Text>
                <Text style={styles.date}>{state.copyright}</Text>
                <View style={styles.block}>
                    <Image
                        style={styles.image}
                        source={{uri: 'file:' + pathToImage}}
                    />
                </View>
                <Text style={styles.explanation}>{state.explanation}</Text>
                <Text
                    style={styles.hdurl}
                    onPress={() => Linking.openURL(`${state.hdurl}`)}>
                    HD Image
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 25,
    },
    date: {
        color: 'black',
        fontSize: 20,
    },
    image: {
        alignSelf: 'center',
        marginRight: 10,
        height: 300,
        width: 300,
    },
    explanation: {
        color: 'black',
        fontSize: 20,
    },
    hdurl: {
        alignSelf: 'center',
        color: 'blue',
        fontSize: 20,
    },
});
