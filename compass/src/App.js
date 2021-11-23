import { transform } from '@babel/core';
import React, {Component, useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, ScrollView, Modal} from 'react-native';
import CompassHeading from 'react-native-compass-heading';

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: 'rgb(102,102,255)',
    },
    blank: {
        backgroundColor: 'white',
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // width:200,
        // height:200,
    },
    compass: {
        // transform: rotate(0deg),
        position: 'relative',
        width: 350,
        height: 350,
        alignSelf: 'center',
    },
    compassArrow:{
        position: 'absolute',
        width: 50,
        height: 310,
        alignSelf: 'center',
    },
    azimuth: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compassHeading: 0,
        };
    }

    componentDidMount(){
        const degree_update_rate = 0.00001;
        CompassHeading.start(degree_update_rate, (heading, accuracy) => {
            this.setState({
                compassHeading: parseInt(heading.heading)
            })
        })

    }

    render() {
        return (
            <Modal>
                <View style={styles.header}>
                    <Text style={{fontSize: 20, color: 'black'}}>Compass</Text>
                </View>
                <View style={styles.blank}>
                    <Image
                        style={styles.compass}
                        source={require('./assets/compass.png')}
                    />
                    <Image
                        style={[styles.compassArrow,
                            {transform: [{rotate: `-${this.state.compassHeading}deg`}]}]}
                        source={require('./assets/compassArrow.png')}
                    />
                </View>
                <View style={styles.azimuth}>
                    <Text style={{fontSize: 20, color: 'black'}}>
                        {this.state.compassHeading == 0
                        ? 0
                        : 360-this.state.compassHeading.toString(10)}
                    </Text>
                </View>
            </Modal>
        );
    }
}
