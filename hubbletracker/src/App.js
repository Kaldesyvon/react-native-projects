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

const Tab = createBottomTabNavigator();

export default function App() {
    const {t, i18n} = useTranslation();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={t('About')} component={Wiki} />
                <Tab.Screen name={t("Hubble's view")} component={POV} />
                <Tab.Screen name={t('Gallery')} component={Gallery} />
                <Tab.Screen
                    name={t('Where is Hubble now?')}
                    component={Intersect}
                />
                <Tab.Screen
                    name={t('Astronomical Picture of the Day')}
                    component={NPOD}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
