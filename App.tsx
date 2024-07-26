import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/DashboardScreen';
import FilmScenes from './components/FilmScenes';
import SceneCharacters from './components/SceneCharacters';
import FilmForm from './components/FilmFormScreen';
import SceneForm from './components/SceneFormScreen';
import CharacterForm from './components/CharacterFormScreen';
import RegisterScreen from './components/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="FilmScenes" component={FilmScenes} />
        <Stack.Screen name="SceneCharacters" component={SceneCharacters} />
        <Stack.Screen name="FilmForm" component={FilmForm} />
        <Stack.Screen name="SceneForm" component={SceneForm} />
        <Stack.Screen name="CharacterForm" component={CharacterForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
