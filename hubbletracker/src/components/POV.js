import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {Component} from 'react/cjs/react.production.min';

export default class POV extends Component {
    state = {
        what_am_i_looking_at: 'Hubble is acquiring new target',
    };

    _isMounted = false;

    constructor() {
        super();
        this.init();
    }

    async init() {
        await this.fetchPicture();
    }

    componentDidMount() {
        this._isMounted = true;
        this.timerId = setInterval(() => this.fetchPicture, 10000);
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.timerId);
    }

    updateContent = e => {
        this.setState(e);
    };

    chooseImage() {
        if (this.state.hasOwnProperty('reference_image_url')) {
            return (
                <Image
                    style={styles.image}
                    source={{uri: this.state.reference_image_url}}
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

    async fetchPicture() {
        await fetch(
            'https://api.spacetelescopelive.org/observation_timelines/latest',
        )
            .then(response => response.json())
            .then(responseJson => {
                this.updateContent(responseJson);
            })
            .catch(error => console.log('pov ' + error));
    }

    render() {
        return (
            <ScrollView /* style={{width: 300, height: 300}} */>
                <View>
                    {this.chooseImage()}
                    <Text>{this.state.what_am_i_looking_at}</Text>
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
