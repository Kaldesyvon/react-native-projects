import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Wiki from './components/Wiki';
import POV from './components/POV';
import Gallery from './components/Gallery';
import Intersect from './components/Intersect';
import NPOD from './components/NPOD';
import {useTranslation} from 'react-i18next';
import './i18n';
import Icon from 'react-native-ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
    const {t, i18n} = useTranslation();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name={t('About')}
                    component={Wiki}
                    options={{
                        tabBarLabel: t('About'),
                        tabBarIcon: ({color, size}) => (
                            <Icon name={'information-circle'} color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={t('Gallery')}
                    component={Gallery}
                    options={{
                        tabBarLabel: t('Gallery'),
                        tabBarIcon: ({color, size}) => (
                            <Icon name={"photos"} color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={t("Hubble's view")}
                    component={POV}
                    options={{
                        tabBarLabel: t("Hubble's view"),
                        tabBarIcon: ({color, size}) => (
                            <Icon name={"eye"} color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={t('Where is Hubble now?')}
                    component={Intersect}
                    options={{
                        tabBarLabel: t('Track Hubble'),
                        tabBarIcon: ({color, size}) => (
                            <Icon name={"locate"} color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={t('Astronomical Picture of the Day')}
                    component={NPOD}
                    options={{
                        tabBarLabel: t('APOD'),
                        tabBarIcon: ({color, size}) => (
                            <Icon name={"star"} color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
