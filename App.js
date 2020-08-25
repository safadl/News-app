

import 'react-native-gesture-handler';
import React,{Component,useState,useEffect} from 'react';
import { NavigationContainer,DarkTheme, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Tabs from './src/components/AllTabs';
import Home from './src/components/Home';
import saved from './src/components/SavedScreen'
import BottomNavigation from './src/components/MyBottomNavigation'
import MyBottomNavigation from './src/components/MyBottomNavigation';
import MyDrawer from './src/components/MyDrawer';
import {Switch} from 'react-native-paper'
import SplashScreen from 'react-native-splash-screen'
import AuthProvider from './src/components/AuthProvider'
// function AppBody() {
//   const {user, logOut} = useAuth();
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
      
//         <View>
//           {user == null ? (
//             <LogInView />
//           ) : (
//             <Button onPress={logOut} title="Log Out" />
//           )}
//         </View>
     
//     </>
//   );
// }
const Stack = createStackNavigator();

export default function App(){
  useEffect(()=>{
    SplashScreen.hide();
  },)
  return (
    <AuthProvider>

     <NavigationContainer theme={DefaultTheme}>
<MyDrawer />
</NavigationContainer>
 </AuthProvider>
  );

};

