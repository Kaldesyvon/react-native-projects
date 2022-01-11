import React from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
    const {t, i18n} = useTranslation();

    return (
        <ScrollView>
            <View>
                <View style={styles.view}>
                    <Image
                        style={styles.image}
                        source={require('../images/pillars_of_creation.jpg')}
                    />
                </View>
                <Text style={styles.text}>
                    {t("The NASA/ESA Hubble Space Telescope has revisited one of its most iconic and popular images: the Eagle Nebula's Pillars of Creation. This image shows the pillars as seen in visible light, capturing the multi-coloured glow of gas clouds, wispy tendrils of dark cosmic dust, and the rust-coloured elephants' trunks of the nebula's famous pillars.")}
                </Text>
            </View>
            <View>
                <View style={styles.view}>
                    <Image
                        style={styles.image}
                        source={require('../images/colliding_gallaxies.jpg')}
                    />
                </View>
                <Text style={styles.text}>
                    {t("The galaxies — also known as NGC 4038 and NGC 4039 — are locked in a deadly embrace. Once normal, sedate spiral galaxies like the Milky Way, the pair have spent the past few hundred million years sparring with one another. This clash is so violent that stars have been ripped from their host galaxies to form a streaming arc between the two. In wide-field images of the pair the reason for their name becomes clear — far-flung stars and streamers of gas stretch out into space, creating long tidal tails reminiscent of antennae. This new image of the Antennae Galaxies shows obvious signs of chaos. Clouds of gas are seen in bright pink and red, surrounding the bright flashes of blue star-forming regions — some of which are partially obscured by dark patches of dust. The rate of star formation is so high that the Antennae Galaxies are said to be in a state of starburst, a period in which all of the gas within the galaxies is being used to form stars. This cannot last forever and neither can the separate galaxies; eventually the nuclei will coalesce, and the galaxies will begin their retirement together as one large elliptical galaxy.")}
                </Text>
            </View>
            <View>
                <View style={styles.view}>
                    <Image
                        style={styles.image}
                        source={require('../images/008_sombrero_galaxy.jpg')}
                    />
                </View>
                <Text style={styles.text}>
                    {t("Hubble has trained its razor-sharp eye on one of the universe's most stately and photogenic galaxies, the Sombrero galaxy, Messier 104 (M104). The galaxy's hallmark is a brilliant white, bulbous core encircled by the thick dust lanes comprising the spiral structure of the galaxy. As seen from Earth, the galaxy is tilted nearly edge-on. We view it from just six degrees north of its equatorial plane. This brilliant galaxy was named the Sombrero because of its resemblance to the broad rim and high-topped Mexican hat. M104 is just beyond the limit of naked-eye visibility and is easily seen through small telescopes. The Sombrero lies at the southern edge of the rich Virgo cluster of galaxies and is one of the most massive objects in that group, equivalent to 800 billion suns. The galaxy is 50,000 light-years across and is located 28 million light-years from Earth.")}
                </Text>
            </View>
            <View>
                <View style={styles.view}>
                    <Image
                        style={styles.image}
                        source={require('../images/005_horsehead_nebula.jpg')}
                    />
                </View>
                <Text style={styles.text}>
                    {t("This Hubble image, captured and released to celebrate the telescope's 23rd year in orbit, shows part of the sky in the constellation of Orion. Rising like a giant seahorse from turbulent waves of dust and gas is the Horsehead Nebula, otherwise known as Barnard 33. This image shows the region in infrared light, which has longer wavelengths than visible light and can pierce through the dusty material that usually obscures the nebula's inner regions. The result is a rather ethereal and fragile-looking structure, made of delicate folds of gas — very different to the nebula's appearance in visible light.")}
                </Text>
            </View>
            <View>
                <View style={styles.view}>
                    <Image
                        style={styles.image}
                        source={require('../images/077_cassiopeia_a.jpg')}
                    />
                </View>
                <Text style={styles.text}>
                    {t("This image provides a detailed look at the tattered remains of a supernova explosion known as Cassiopeia A (Cas A). Itis the youngest known remnant from a supernova explosion inthe Milky Way. The new Hubble image shows the complex andintricate structure of the star's shattered fragments.")}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        width: 'auto',
        padding: 10,
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text:{
        width: 'auto',
        padding: 10,
        height: 'auto'
    },
});
