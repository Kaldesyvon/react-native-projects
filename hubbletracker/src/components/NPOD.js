import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ScrollView, Linking} from 'react-native';
import {Component} from 'react/cjs/react.production.min';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class NPOD extends Component {
    state = {
        title: '',
        date: '',
        copyright: '',
        url: 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif',
        explanation: '',
        hdurl: '',
    };

    constructor() {
        super();
        this.init();
    }

    replacer(value) {
        return value.replace(/\\/g, '');
    }

    async init() {
        await this.fetchPicture();
        this.updateURL(this.state);
    }

    async updateURL(e) {
        this.state.title = await this.getTitle();
        this.state.date = await this.getDate();
        this.state.copyright = await this.getCopyright();
        this.state.url = await this.getURL();
        this.state.explanation = await this.getExplanation();
        this.state.hdurl = await this.getHDURL();
        this.forceUpdate();
    }

    async storeData(key, value) {
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
    }

    async getData(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            return JSON.parse(value);
        } catch (e) {
            console.error('error getting data' + e);
        }
    }

    async getTitle() {
        return await this.getData('apod').then(r => r.title);
    }

    async getDate() {
        return await this.getData('apod').then(r => r.date);
    }

    async getCopyright() {
        return await this.getData('apod').then(r => r.copyright);
    }

    async getURL() {
        return await this.getData('apod').then(r => r.url);
    }

    async getExplanation() {
        return await this.getData('apod').then(r => r.explanation);
    }

    async getHDURL() {
        return await this.getData('apod').then(r => r.hdurl);
    }

    async fetchPicture() {
        await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=zagIQUrOh1phJr6NEDIF9uv6BPPTn9QPTO3ebgsO',
        )
            .then(response => response.json())
            .then(responseJson => {
                this.storeData('apod', responseJson);
            })
            .catch(error => console.error('fetch error ' + error));
    }

    render() {
        return (
            <ScrollView style={{marginLeft: 10}}>
                <View>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.date}>{this.state.date}</Text>
                    <Text style={styles.date}>{this.state.copyright}</Text>
                    <View style={styles.block}>
                        <Image
                            style={styles.image}
                            source={{uri: this.state.url}}
                        />
                    </View>
                    <Text style={styles.explanation}>
                        {this.state.explanation}
                    </Text>
                    <Text
                        style={styles.hdurl}
                        onPress={() => Linking.openURL(`${this.state.hdurl}`)}>
                        HD Image
                    </Text>
                </View>
            </ScrollView>
        );
    }
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
