import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {Component} from 'react/cjs/react.production.min';

export default function POV() {
    const[state, setState] = useState({
        what_am_i_looking_at: 'Hubble is acquiring new target',
    })

    useEffect(() => {
        async function fetchPicture(){
            await fetch(
                'https://api.spacetelescopelive.org/observation_timelines/latest',
            )
                .then(response => response.json())
                .then(responseJson => {
                    setState(responseJson);
                })
                .catch(error => console.log('pov ' + error));
        }
        fetchPicture()
    }, [])

    const chooseImage = () => {
        if (state.reference_image_url) {
            return (
                <Image
                    style={styles.image}
                    source={{uri: state.reference_image_url}}
                />
            );
        } else {
            return (
                <Image
                    style={styles.image}
                    source={require('../images/placeholder_for_missing_image.jpeg')}
                />
            );
        }
    }

    return (
        <ScrollView /* style={{width: 300, height: 300}} */>
            <View>
                {chooseImage()}
                <Text>{state.what_am_i_looking_at}</Text>
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
