import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register'
import AllTabs from './AllTabs'
import Login from './Login'
import MyDrawer from './MyDrawer';
const Stack = createStackNavigator();

function MyStack() {
    return (
     
        <Stack.Navigator initialRouteName='drawer'>
          <Stack.Screen name="Register" component={Register} />

        </Stack.Navigator>
   
    );
  }
  export default MyStack;