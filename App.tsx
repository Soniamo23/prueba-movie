import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './navigation/HomeScreen';
import CharactersScreen from './navigation/CharactersScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}
          options={{ title: 'Personajes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;