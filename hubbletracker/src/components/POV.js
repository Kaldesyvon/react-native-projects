import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function POV() {
    const {t, i18n} = useTranslation();

    const [state, setState] = useState({
        what_am_i_looking_at: t('Hubble is acquiring new target'),
    });

    const formatText = async () => {
        if (state.hasOwnProperty('begin_at')) {
            setState({
                ...state,
                what_am_i_looking_at: `${t('Between')} ${state.begin_at.slice(
                    11,
                    16,
                )} ${t('and')} ${state.end_at.slice(11, 16)} ${t(
                    'on',
                )} ${new Date().toLocaleDateString()} ${t(
                    'Hubble is looking at',
                )} ${state.target_name} ${t('with')} ${
                    state.science_instrument
                } (${state.science_instrument_acronym}) ${t('for')} ${
                    state.principal_investigator_full_name
                }.`,
            });
        }
    };

    useEffect(() => {
        async function fetchPicture() {
            await fetch(
                'https://api.spacetelescopelive.org/observation_timelines/latest',
            )
                .then(response => response.json())
                .then(responseJson => {
                    setState(responseJson);
                })
                .then(() => {
                    formatText();
                })
                .catch(error => console.log('pov ' + error));
        }
        fetchPicture();
    }, []);

    useEffect(() => {
        formatText();
    }, [state.what_am_i_looking_at]);

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
    };

    console.log('renderrrer');
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
