import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Title from './src/components/title';
import Home from './src/components/Home';
import Sobre from './src/components/Sobre';
import Blog from './src/components/Blog';
import Adoção from './src/components/Adoção';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <Title /> }} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="Adoção" component={Adoção} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
