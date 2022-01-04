import React, { useEffect } from 'react';
import {View} from 'react-native';


export default function POV(){
    const fetchPicture = async () => {
        fetch("https://api.spacetelescopelive.org/observation_timelines/latest")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                // setTimeout(() => {
                //     this.setState({
                //         loading: false,
                //         dataSource: responseJson
                //     })
                // }, 2000)

            })
            .catch(error => console.log('pov ' + error))

    };

    useEffect(() => {
        fetchPicture();
    });

    return(
        <View>
        </View>
    )
}