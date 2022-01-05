import React from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';

// https://www.nasa.gov/mission_pages/hubble/multimedia/index.html

export default function Gallery(){
    return(
        <ScrollView>
            <View>
                <View style={styles.view}>
                    <Image style={styles.image} source={require('../images/pillars_of_creation.jpg')}/>
                </View>
                <Text>
                    BlaBla
                </Text>
            </View>
            <View>
                <View style={styles.view}>
                    <Image style={styles.image} source={require('../images/colliding_gallaxies.jpg')}/>
                </View>
                <Text>
                    BlaBla
                </Text>
            </View>
            <View>
                <View style={styles.view}>
                    <Image style={styles.image} source={require('../images/gallaxy.jpg')}/>
                </View>
                <Text>
                    BlaBla
                </Text>
            </View>
            <View>
                <View style={styles.view}>
                    <Image style={styles.image} source={require('../images/supernova_remants.jpg')}/>
                </View>
                <Text>
                    BlaBla
                </Text>
            </View>
            <View>
                <View style={styles.view}>
                    <Image style={styles.image} source={require('../images/jupiter_and_europa.png')}/>
                </View>
                <Text>
                    BlaBla
                </Text>
            </View>
            <View>
                <View style={styles.view}>
                    <Image style={styles.image} source={require('../images/gravity_lenses.jpg')}/>
                </View>
                <Text>
                    BlaBla
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        width: 'auto',
        resizeMode: 'contain',
        height: 300
    },
    image: {
        width: '100%',
        height: '100%'
    }
})