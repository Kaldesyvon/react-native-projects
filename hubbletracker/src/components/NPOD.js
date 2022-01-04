import React, {useEffect} from 'react';
// import getAxios from '../api/getAxios';
import axios from 'axios';
import {View} from 'react-native';

export default function NPOD() {
    const fetchPicture = async () => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=zagIQUrOh1phJr6NEDIF9uv6BPPTn9QPTO3ebgsO")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
            })
            .catch(error => console.log('apod' + error))

    };


    useEffect(() => {
        fetchPicture();
    }, []);

    return <View></View>;
}
