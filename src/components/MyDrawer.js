import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { Container, Header, Title, Button, Left, Right, Body,Footer, FooterTab,Text,Content,Icon,Tab, Tabs, ScrollableTab} from 'native-base';
import {ScrollView, StyleSheet,StatusBar, TouchableOpacity, NativeModules,processColor, View,useWindowDimensions} from 'react-native';
import {Switch, DarkTheme} from 'react-native-paper'
import AllTabs from './AllTabs'
import SavedScreen from './SavedScreen'
import MyHeader from './MyHeader';
import Login from './Login';
import MyStack from './MyStack'
import Register from './Register'
import Home from './Home'
import MyBottomNavigation from './MyBottomNavigation'
import DrawerContent from './DrawerContent'
import PopularSources from './PopularSources'
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

function MyDrawer({navigation}, props){
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    const Stack = createStackNavigator();

  return(
      <Container> 
      <NavigationContainer>
      
   
     {/* drawerContent={() => <DrawerContent/>}   */}
  <Drawer.Navigator  drawerContent={()=><PopularSources/>} initialRouteName="BottomNav" 
    drawerType={dimensions.width >= 768 ? 'permanent' : 'front' }
    //hideStatusBar={true}
    drawerContentOptions={{
    activeTintColor: '#89d9c1',
    backgroundColor: props.colorr? "#000000" : 'white'
      }}
      >
     <Drawer.Screen name='Home' component={MyBottomNavigation} />
      <Drawer.Screen name="Tabs" component={AllTabs} />
      <Drawer.Screen name="Popular sources" component={PopularSources} />

       
    </Drawer.Navigator>
    

  </NavigationContainer>

  </Container>
  )  
}
const styles = StyleSheet.create({
   
  })
export default MyDrawer;