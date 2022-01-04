import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Wiki from './components/Wiki';
import POV from './components/POV';
import Gallery from './components/Gallery';
import Intersect from './components/Intersect';
import NPOD from './components/NPOD';


const Tab = createBottomTabNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='About' component={Wiki}/>
                <Tab.Screen name='POV' component={POV}/>
                <Tab.Screen name='Gallery' component={Gallery}/>
                <Tab.Screen name='Intersect' component={Intersect}/>
                <Tab.Screen name='NPOD' component={NPOD}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
