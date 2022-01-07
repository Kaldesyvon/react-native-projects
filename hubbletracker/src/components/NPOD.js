import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ScrollView, Linking} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NPOD() {
    const [state, setState] = useState({
        title: '',
        date: '',
        copyright: '',
        url: 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif',
        explanation: '',
        hdurl: '',
    });

    useEffect(() => {
        getDataAndSetState('apod');
        async function fetchPicture() {
            await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=zagIQUrOh1phJr6NEDIF9uv6BPPTn9QPTO3ebgsO',
            )
                .then(response => response.json())
                .then(responseJson => {
                    storeData('apod', responseJson);
                })
                .catch(error => console.error('fetch error ' + error));
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
    };

    const getDataAndSetState = async key => {
        try {
            const value = await AsyncStorage.getItem(key);
            setState(JSON.parse(value));
        } catch (e) {
            console.error('error getting data' + e);
        }
    };

    return (
        <ScrollView style={{marginLeft: 10}}>
            <View>
                <Text style={styles.title}>{state.title}</Text>
                <Text style={styles.date}>{state.date}</Text>
                <Text style={styles.date}>{state.copyright}</Text>
                <View style={styles.block}>
                    <Image style={styles.image} source={{uri: state.url}} />
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
