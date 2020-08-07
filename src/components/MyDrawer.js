import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { Container, Header, Title, Button, Left, Right, Body,Footer, FooterTab,Text,Content,Icon,Tab, Tabs, ScrollableTab} from 'native-base';
import {ScrollView, StyleSheet,StatusBar, TouchableOpacity, NativeModules,processColor, View,useWindowDimensions} from 'react-native';

import AllTabs from './AllTabs'
import SavedScreen from './SavedScreen'
import MyHeader from './MyHeader';
import Login from './Login';
const Drawer = createDrawerNavigator();

function MyDrawer({navigation}, props){
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

  return(
      <Container> 
      
    <NavigationContainer >
    <Drawer.Navigator initialRouteName="Tabs" 
    drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
    //hideStatusBar={true}
    drawerContentOptions={{
    activeTintColor: '#89d9c1',
    backgroundColor: props.colorr? "#000000" : 'white'
      }}
      >
        <Drawer.Screen name='login' component={Login} />
      <Drawer.Screen name="Tabs" component={AllTabs} />
      <Drawer.Screen name="Saved articles" component={SavedScreen} />
       

    </Drawer.Navigator>
  </NavigationContainer>

  </Container>
  )  
}
const styles = StyleSheet.create({
   
  })
export default MyDrawer;