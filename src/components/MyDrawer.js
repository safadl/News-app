import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Container} from 'native-base';
import {StyleSheet,Dimensions,ScrollView,Image} from 'react-native';
import AllTabs from './AllTabs'

import MyBottomNavigation from './MyBottomNavigation'
import PopularSources from './PopularSources'

const Drawer = createDrawerNavigator();


function MyDrawer({navigation}, props){
    const dimensions = Dimensions.get('window').width;
    const isLargeScreen = dimensions.width >= 768;

  return(
      <Container> 
      
  <Drawer.Navigator  drawerContent={()=><ScrollView><Image style={{width:'100%',margin:10,height:200,resizeMode:'cover'}} source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/000/274/622/original/strasno.jpg'}} /><PopularSources /></ScrollView>} initialRouteName="Home" 
    drawerType={dimensions.width >= 768 ? 'permanent' : 'front' }
    //hideStatusBar={true}
    drawerContentOptions={{
    activeTintColor: '#89d9c1',
    backgroundColor: props.colorr? "#000000" : 'white'
      }}>
      
     <Drawer.Screen name='Home' component={MyBottomNavigation} />
     <Drawer.Screen name="Tabs"  component={AllTabs} />
     
    </Drawer.Navigator>
    


  </Container>
  )  
}
const styles = StyleSheet.create({
   
  })
export default MyDrawer;