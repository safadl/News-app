
//import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
/*import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';*/
import World from './src/components/World';
import General from './src/components/General';
import Business from './src/components/Business'
import Health from './src/components/Health'
import Technology from './src/components/Technology'
import Science from './src/components/Science'
import Sports from './src/components/Sports'
import Entertainment from './src/components/Entertainment'
import { Container, Header, Title, Button, Left, Right, Body,Footer, FooterTab,Text,Content,Icon,Tab, Tabs, ScrollableTab} from 'native-base';
//import SplashScreen from 'react-native-splash-screen'
import { IsEmpty, Map } from "react-lodash";
import _, { stubFalse } from 'lodash';
import {ScrollView, StyleSheet,StatusBar, TouchableOpacity, NativeModules,processColor, View,useWindowDimensions} from 'react-native';

//import {DrawerNavigator} from 'react-navigation'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyDrawer from './src/components/MyDrawer';
import MyHeader from './src/components/MyHeader';
import Register from './src/components/Register'
import Login from './src/components/Login'
import MyStack from './src/components/MyStack'
import AllTabs from './src/components/AllTabs'
import Home from './src/components/Home'
import {PaperProvider} from 'react-native-paper'
// import {AuthProvider} from './src/components/AuthProvider';
// import {useAuth} from './src/components/AuthProvider';
const Drawer = createDrawerNavigator();

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
class App extends React.Component{
  
render(){
  //const Stack = createStackNavigator();
  const Stack = createStackNavigator();

  return (
  //   <AuthProvider>
  // {/* <MyDrawer /> */}
  // <AppBody />
  // </AuthProvider>

   <Container>
     {/* <NavigationContainer>

<Stack.Navigator>
<Stack.Screen name="AllTabs" component={AllTabs} />

<Stack.Screen name="Home" component={Home} />

</Stack.Navigator>
</NavigationContainer> */}
     <MyDrawer/>
     {/* <PaperProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </PaperProvider> */}
   </Container> 
 
  );
}
};
const styles = StyleSheet.create({
  header:{
    backgroundColor: '#89d9c1'//'#0e9aa7'
  }
})
export default App;
