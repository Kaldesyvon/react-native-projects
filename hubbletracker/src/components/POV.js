import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {Component} from 'react/cjs/react.production.min';

export default class POV extends Component {
    state = {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanatomised.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fspinner-test4.gif&f=1&nofb=1',
        explanation: '',
    };
    constructor() {
        super();
        this.init();
    }

    async init() {
        await this.fetchPicture();
    }

    updateContent = (e) => {
        this.setState({
            url: e.url,
            explanation: e.explanation
        })
    }

    async fetchPicture() {
        await fetch(
            'https://api.spacetelescopelive.org/observation_timeline/latest',
        )
            .then(response => response.json())
            .then(responseJson => {
                // this.updateContent(responseJson)
                console.log(this.state.what_am_i_looking_at);
                console.log(this.state.url);
            })
            .catch(error => console.log('pov ' + error));
    }

    render() {
        return (
            <ScrollView /* style={{width: 300, height: 300}} */>
                <Image source={{uri: this.state.url}} />
                <Text>{this.state.explanation}</Text>
            </ScrollView>
        );
    }
}