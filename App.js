import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './components/list';
import Detail from './components/details';

const Stack = createStackNavigator();

const App = () => {

return (
  
  <NavigationContainer>
  <StatusBar barStyle="dark-content" backgroundColor="#8E24AA"/>
  <Stack.Navigator>
    <Stack.Screen 
    name="Home" 
    component={List}
    options={{ 
      headerStyle: {
        backgroundColor: '#e84636fe',
      },
      headerTintColor: '#e84636fe' }} />

    <Stack.Screen 
    name="Detail" 
    component={Detail}
    options={{ 
      headerStyle: {
        backgroundColor: '#e84636fe',
      },
      headerTintColor: '#e84636fe' }} />  
  </Stack.Navigator>
 </NavigationContainer>   

  ) 
}

export default App;