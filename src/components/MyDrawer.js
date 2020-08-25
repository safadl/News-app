import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { Container} from 'native-base';
import {StyleSheet,Dimensions} from 'react-native';
import {Text} from 'react-native'
import AllTabs from './AllTabs'

import MyBottomNavigation from './MyBottomNavigation'
import PopularSources from './PopularSources'
import {createStackNavigator} from '@react-navigation/stack';
import{Switch} from 'react-native-paper'
import sourcesDataItem from './sourcesDataItem';
import DrawerSources from './DrawerSources';
import finalSources from './finalSources'
import MyDStack from './MyDStack'
const Drawer = createDrawerNavigator();


function MyDrawer({navigation}, props){
    const dimensions = Dimensions.get('window').width;
    const isLargeScreen = dimensions.width >= 768;

  return(
      <Container> 
      
  <Drawer.Navigator  drawerContent={()=><PopularSources/>} initialRouteName="Home" 
    drawerType={dimensions.width >= 768 ? 'permanent' : 'front' }
    //hideStatusBar={true}
    drawerContentOptions={{
    activeTintColor: '#89d9c1',
    backgroundColor: props.colorr? "#000000" : 'white'
      }}>
      
     <Drawer.Screen name='Home' component={MyBottomNavigation} />
     <Drawer.Screen name="Tabs" component={AllTabs} />
     <Drawer.Screen name="DrawerSources" component={MyDStack} /> 
     
    </Drawer.Navigator>
    


  </Container>
  )  
}
const styles = StyleSheet.create({
   
  })
export default MyDrawer;