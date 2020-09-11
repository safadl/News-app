//import 'react-native-gesture-handler';
import * as React from 'react';
import { BottomNavigation, Text,Switch } from 'react-native-paper';
import { NavigationContainer,DarkTheme,useTheme} from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Home from './Home'
import SavedScreen from './SavedScreen'
import Login from './Login'
import Tabs from './AllTabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity,Button} from 'react-native'
import {Icon} from 'react-native-elements'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Register from './Register'
const Stack = createStackNavigator();
const SStack = createStackNavigator();
const AStack=createStackNavigator();
function AuthStack(){
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}
function SavedStack({navigation}){
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
<SStack.Screen title="Saved articles"name="Saved" component={SavedScreen} options={{
   title:"Saved articles" ,

// headerRight:()=>(
// <Switch 
// value={true} 
// onValueChange={console.log('toggled')}

//   />  
// ),
headerLeft:(props)=>(
    <TouchableOpacity onPress={navigation.openDrawer}>

      <Icon
        size={35}
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-menu" : "menu-outline"}
        onPress={navigation.openDrawer}
        color={colors.text}
      />
      </TouchableOpacity>

)}}
 />
</Stack.Navigator>
  )
}
function MyStack({navigation}){
  const { colors } = useTheme();

  return ( 
     <Stack.Navigator >

     <Stack.Screen   options={{headerLeft:(props)=>(
      <TouchableOpacity   onPress={navigation.openDrawer}
      >
      <Icon
        size={35}
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-menu" : "ios-menu-outline"}
        color={colors.text}
        
      />
      </TouchableOpacity>

),       
title: 'Categories',headerTitleAlign:'center',headerStyle:{height:70},headerTitleStyle:{fontSize:30,letterSpacing:2,fontWeight:'normal',fontFamily:''}}}
     name="Home" 
     component={Home} 

 />
<Stack.Screen options={{
   title:"News" ,

// headerRight:()=>(
// <Switch 
// value={true} 
// onValueChange={console.log('toggled')}

//   />  
// ),
headerLeft:(props)=>(
    <TouchableOpacity onPress={navigation.openDrawer}>

      <Icon
        size={35}
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-menu" : "menu-outline"}
        onPress={navigation.openDrawer}
        color={colors.text}
      />
      </TouchableOpacity>

)

 }} name="tabs" component={Tabs}
 
 />
 <Stack.Screen name='login' component={Login} />
 <Stack.Screen name='Register' component={Register} />


</Stack.Navigator>

  
 
  );

};

const Tab = createBottomTabNavigator();

const MyBottomTabNavigation = () => {
  return (

    <Tab.Navigator 
 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
  
        if (route.name === 'Home') {

          iconName = focused
            ? 'ios-home' 

            : 'ios-home-outline';
        } else if (route.name === 'Saved') {
          iconName = focused ? 'ios-heart' : 'ios-heart-outline';
        }else if(route.name=='Account'){
          iconName=focused ? 'person' : 'person-outline'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },

    })} 
    tabBarOptions={{
      activeTintColor:'#6200EE',// '#b9bce9',//'tomato',
      inactiveTintColor: 'gray',
     
    }}
    
    shifting={true}

    
        barStyle={{backgroundColor:'white'}}
        activeColor='#02b29f'>
      <Tab.Screen name="Home" component={MyStack}  />
      <Tab.Screen name="Saved" component={SavedStack} />
      <Tab.Screen name="Account" component={AuthStack} />
    {/* <Tab.Screen name="Register" component={Register} /> */}


    </Tab.Navigator>
  );
};

export default MyBottomTabNavigation;