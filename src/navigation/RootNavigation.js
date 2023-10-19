import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Screens.Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Screens.Packages}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Scan"
          component={Screens.Scan}
          options={{title: 'Escanear paquetes'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
