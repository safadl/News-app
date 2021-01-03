

import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import { NavigationContainer,DarkTheme, LightTheme} from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import MyDrawer from './src/navigation/MyDrawer';
import SplashScreen from 'react-native-splash-screen'
import * as firebase from 'firebase'
import {Provider} from 'react-redux'
import {store} from './src/redux/store/store'
import {useSelector,useDispatch} from 'react-redux'

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
const AppWrapper = () => {
  const data=useSelector((state)=>state);
  const {Theme}=data;
  return (

<NavigationContainer theme={Theme ? DarkTheme: LightTheme}>
<MyDrawer/>
</NavigationContainer>

  )
}
 const App=()=>{

  console. disableYellowBox = true
  useEffect(()=>{
    SplashScreen.hide();
  },)
  return (

    <Provider store={store}>
<AppWrapper/>
</Provider>
  );

};
export default App;