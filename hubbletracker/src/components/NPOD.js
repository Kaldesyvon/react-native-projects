import React, {useEffect, useState} from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import {Component} from 'react/cjs/react.production.min';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class NPOD extends Component {
    // state = {
    //     copyright: '',
    //     date: '',
    //     explanation: '',
    //     hdurl: '',
    //     title: '',
    //     url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanatomised.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fspinner-test4.gif&f=1&nofb=1',
    // };

    state = {
        copyright: '',
        date: '',
        explanation: '',
        hdurl: '',
        title: '',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanatomised.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fspinner-test4.gif&f=1&nofb=1',
    };

    constructor() {
        super();
        // this.storeData('apod', JSON.stringify(this.state))
        this.init();
        // this.pictureURL = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanatomised.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fspinner-test4.gif&f=1&nofb=1';
    }

    replacer(value) {
        return value.replace(/\\/g, '');
     }

    async init() {
        await this.fetchPicture();
        this.updateURL(this.state);
    }

    async updateURL(e){
        this.state.url = await this.getURL()
        this.forceUpdate(); // setState

    }

    async storeData(key, value){
        try {
            console.debug('data value to store: '+ JSON.stringify(value))
            const storedKey = await AsyncStorage.getItem(key)
            console.log('stored key: ' + JSON.stringify(storedKey).replace(/\\/g, ''))
            if (storedKey){
                console.debug('mergujem')
                await AsyncStorage.mergeItem(key, JSON.stringify(value));
            }
            else {
                console.debug('setujem')
                await AsyncStorage.setItem(key, JSON.stringify(value));
            }
        } catch (e) {
            console.error('error storing data' + e)
        }
    }

    async getData(key){
        try {
            const value = await AsyncStorage.getItem(key);
            console.log("VALUE: " + typeof value)
            // console.log('getData value: ' + value)
            return JSON.parse(value)
        } catch (e) {
            console.error('error getting data' + e)
        }
    }

    async getURL(){
        return await this.getData('apod').then(r => r.url)
    }

    // updateContent = (e) => {
    //     this.setState({
    //         copyright: e.copyright,
    //         date: e.date,
    //         explanation: e.explanation,
    //         hdurl: e.hdurl,
    //         title: e.title,
    //         url: e.url
    //     })
    // }

    async fetchPicture() {
        await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=zagIQUrOh1phJr6NEDIF9uv6BPPTn9QPTO3ebgsO',
        )
            .then(response => response.json())
            .then(responseJson => {
                this.storeData('apod', responseJson);
                // this.updateContent(responseJson)
                // console.log(responseJson)
                // console.log(this.getData('apod'))
                // console.log(this.state.explanation);
                // console.log(this.state.url);
            })
            .catch(error => console.log('apod ' + error));
            console.warn(await this.getURL())
    }

    render() {
        return (
            <ScrollView /* style={{width: 300, height: 300}} */>
                <Image style={styles.image} source={{uri: this.state.url}} />
                {/* <Text>{this.getData('apod').url}</Text> */}
                {/* <Text>{this.getData('apod').explanation}</Text> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
    },
})
