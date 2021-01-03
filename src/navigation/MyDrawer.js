import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Container} from 'native-base';
import {StyleSheet,Dimensions,ScrollView,Image} from 'react-native';
import AllTabs from '../components/AllTabs'
import MyBottomNavigation from './MyBottomNavigation'
import PopularSources from '../components/PopularSources'
import Login from '../components/Login';
import Register from '../components/Register';

const Drawer = createDrawerNavigator();
function MyDrawer({navigation}, props){
    const dimensions = Dimensions.get('window').width;
    const isLargeScreen = dimensions.width >= 768;

  return(
      <Container>     
     <Drawer.Navigator initialRouteName='login'  drawerContent={()=><ScrollView><Image style={{width:'80%',margin:10,height:250,resizeMode:'cover'}} source={require('../images/Newsletter.gif')} /><PopularSources /></ScrollView>} 
    drawerType={dimensions.width >= 768 ? 'permanent' : 'front' }
    //hideStatusBar={true}
    drawerContentOptions={{
    activeTintColor: '#89d9c1',
    backgroundColor: props.colorr? "#000000" : 'white'
      }}>
      <Drawer.Screen name='login' component={Login}/>
      <Drawer.Screen name='Register' component={Register}/>

     <Drawer.Screen name='Home' component={MyBottomNavigation} />
     <Drawer.Screen name="Tabs"  component={AllTabs} />
     
    </Drawer.Navigator>
    


  </Container>
  )  
}
const styles = StyleSheet.create({
   
  })
export default MyDrawer;