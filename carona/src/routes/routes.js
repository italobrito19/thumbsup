/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './../screens/Login';
import { Home } from './../screens/Home';
import { Carona } from './../screens/Carona';
import { Reservas } from './../screens/Reservas';

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"  headerMode='none' >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Carona' component={Carona} />
                <Stack.Screen name='Reservas' component={Reservas} />
            </Stack.Navigator>
        </NavigationContainer>
      );
}