

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
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCbMbs-UR4YD-IGXzulSE6Go52DMrNdkCE",
  authDomain: "newsapp-50623.firebaseapp.com",
  databaseURL: "https://newsapp-50623.firebaseio.com",
  projectId: "newsapp-50623",
  storageBucket: "newsapp-50623.appspot.com",
  messagingSenderId: "984532084640",
  appId: "1:984532084640:web:5fe88b053882798fbca6c5",
  measurementId: "G-WJ8QXXRWWK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const Stack = createStackNavigator();

export default function App(){
  const [Mytheme,setTheme]= React.useState(false)

  console. disableYellowBox = true
  useEffect(()=>{
    SplashScreen.hide();
  },)
  return (


 <NavigationContainer theme={Mytheme ? DarkTheme: DefaultTheme}>
<MyDrawer theme={Mytheme}/>
</NavigationContainer>
  );

};

// import React from 'react';
// import {SafeAreaView, View, StatusBar} from 'react-native';
// import {Button} from 'react-native-elements';
// import {Login} from './src/components/Login';
// import {AuthProvider,useAuth} from './src/components/AuthProvider'

// const App = () => {
//   return (

//     <AuthProvider>

//       {AppBody()}

//     </AuthProvider>

//   );
// };

// // The AppBody is the main view within the App. If a user is not logged in, it
// // renders the login view. Otherwise, it renders the tasks view. It must be
// // within an AuthProvider.
// function AppBody() {

//   const {user, logOut} = useAuth();

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <View>
//           {user == null ? (
//             <Login />
//           ) : (
//             <Button onPress={logOut} title="Log Out" />
//           )}
//         </View>
//       </SafeAreaView>
//     </>
//   );
// }

// export default App;