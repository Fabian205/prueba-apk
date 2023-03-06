import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import BienvenidosScreen from '../screens/BienvenidosScreen';
import CambiarContraScreen from '../screens/CambiarContraScreen';
import MenuInicioScreen from '../screens/MenuInicioScreen';

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,                   
                }}
            >
                <Stack.Screen
                    name = 'Home'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                />
                <Stack.Screen
                    name='Welcome'
                    component={BienvenidosScreen}                   
                />
                <Stack.Screen
                    name='CambiaContra'
                    component={CambiarContraScreen}
                />
                <Stack.Screen
                    name='MenuInicio'
                    component={MenuInicioScreen}
                />                               
            </Stack.Navigator>           
        </NavigationContainer>
    )
}

export default MainStack