import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';


export default function Wiki(){
    const {t, i18n} = useTranslation();

    return(
        <ScrollView >
                <View style={styles.page}>
                    <Image style={styles.hubble} source={require('../images/hubble_from_space.jpg')}/>
                    <Text>{t('HST viewed from Discovery during second service mission')}</Text>
                </View>

                <View style={styles.page2}>
                    <Text style={styles.text}>
                        {t("The Hubble Space Telescope (HST or Hubble) is a space telescope launched into low Earth orbit in 1990 and still remains operational. It was named after Edwin Hubble who discovederd basis for the expansion of the universe. HST is one of the most largest and versatile telescope. It was designed to be serviceable. Several space shuttle missions were conducted to repair or renew parts of HST. Its 2.4 m mirror observe in the UV, visible and nead-infrared regions of the electromagnetic spectum. Hubble took a lot of photos that answered our questions but a lot more that rised new questions. In this App you can see what Hubble is seeing right now, where it is and where it will be and, photos it took and every day new NASA's chosen picture. This app was made for aniversary of 1 billion seconds that HST is in space.")}
                    </Text>
                </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    hubble:{
        width: '100%',
        height: '100%'
    },
    page:{
        width: 'auto',
        padding: 10,
        height: 300
    },
    text:{
        color: 'black',
        // display: 'flex',
    },
    page2:{
        marginTop: '10%',
        width: 'auto',
        padding: 10,
        height: 'auto'
    },
})