//import 'react-native-gesture-handler';
import  React, {useState} from 'react';
import { BottomNavigation, Text,Switch,Provider } from 'react-native-paper';
import { NavigationContainer,DarkTheme,useTheme} from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import {Image,Dimensions} from 'react-native'
import Home from '../components/Home' 
import SavedScreen from '../components/SavedScreen'
import Login from '../components/Login'
import Tabs from '../components/AllTabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity,Button,View} from 'react-native'
import {Icon} from 'react-native-elements'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { change_theme } from '../redux/actions/actionCreators';
import {useSelector,useDispatch} from 'react-redux'
import Register from '../components/Register'
const Stack = createStackNavigator();
const SStack = createStackNavigator();
const AStack=createStackNavigator();
////////////////////////////
function AuthStack({navigation}){
  const dispatch=useDispatch()
  const data=useSelector((state)=>state);
  const { colors } = useTheme();

  const {Theme}=data;
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen options={{
       
        headerShown:false,
   title:"Login" ,
   
   headerRight:(props)=>(<View><Switch value={Theme} onValueChange={()=>dispatch(change_theme(!Theme))} /></View>
   ),
headerLeft:(props)=>(
    <TouchableOpacity style={{marginLeft:15}} onPress={navigation.openDrawer}>
{/* 
      <Icon
        size={35}
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-menu" : "menu-outline"}
        onPress={navigation.openDrawer}
        color={colors.text}
      /> */}
      <Image source={require("../images/menu.png")} style={{width:Dimensions.get('window').width*0.05,height:Dimensions.get('window').height*0.05}}  onPress={navigation.openDrawer} />
      </TouchableOpacity>

)}} name='Login' component={Login}/>
      <Stack.Screen  options={{
           headerShown:false,
   title:"Register" ,
   headerRight:(props)=>(<View><Switch value={Theme} onValueChange={()=>dispatch(change_theme(!Theme))} /></View>
   ),
headerLeft:(props)=>(
    <TouchableOpacity style={{marginLeft:15}} onPress={navigation.openDrawer}>

      {/* <Icon
        size={35}
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-menu" : "menu-outline"}
        onPress={navigation.openDrawer}
        color={colors.text}
      /> */}
            <Image source={require("../images/menu.png")} style={{width:Dimensions.get('window').width*0.05,height:Dimensions.get('window').height*0.05}}  onPress={navigation.openDrawer} />

      </TouchableOpacity>

)}} name='Register' component={Register} />
    </Stack.Navigator>
  )
} 
/////////////////////////////////////
function SavedStack({navigation}){
  const { colors } = useTheme();
  const dispatch=useDispatch()
  const data=useSelector((state)=>state);

  const {Theme}=data;

  return (
    <Stack.Navigator>
<SStack.Screen title="Saved articles"name="Saved" component={SavedScreen} options={{
   title:"Saved articles" ,
   headerRight:(props)=>(<View><Switch value={Theme} onValueChange={()=>dispatch(change_theme(!Theme))} /></View>
   ),
headerLeft:(props)=>(
    <TouchableOpacity style={{marginLeft:15}} onPress={navigation.openDrawer}>
{/* 
      <Icon
        size={35}
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-menu" : "menu-outline"}
        onPress={navigation.openDrawer}
        color={colors.text}
      /> */}
            <Image source={require("../images/menu.png")} style={{width:Dimensions.get('window').width*0.05,height:Dimensions.get('window').height*0.05}}  onPress={navigation.openDrawer} />

      </TouchableOpacity>

)}}
 />
</Stack.Navigator>
  )
} 
////////////////////////////////////////
function MyStack({navigation}){
  
  const [MySwitch,setSwitch] =useState(false);
  const dispatch=useDispatch()
  const data=useSelector((state)=>state);

  const {Theme}=data;

  const { colors } = useTheme();
 onToggleSwitch = () =>setSwitch(!MySwitch);
   
  return ( 
     <Stack.Navigator >

     <Stack.Screen    options={{headerLeft:(props)=>(
      <TouchableOpacity style={{marginLeft:15}}   onPress={navigation.openDrawer}
      >
      {/* <Icon
        size={35}
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-menu" : "ios-menu-outline"}
        color={colors.text}
        
      /> */}
            <Image source={require("../images/menu.png")} style={{width:Dimensions.get('window').width*0.05,height:Dimensions.get('window').height*0.05}}  onPress={navigation.openDrawer} />

      </TouchableOpacity>

),
headerShown:false,       
title: 'Categories',headerTitleAlign:'center',headerStyle:{height:70},headerTitleStyle:{fontSize:30,letterSpacing:2,fontWeight:'normal'
}}}
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
headerRight:(props)=>(<View><Switch value={Theme} onValueChange={()=>dispatch(change_theme(!Theme))} /></View>
),
headerLeft:(props)=>(
    <TouchableOpacity style={{marginLeft:15}} onPress={navigation.openDrawer}>

      {/* <Icon
        size={35}
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-menu" : "menu-outline"}
        onPress={navigation.openDrawer}
        color={colors.text}
      /> */}
            <Image source={require("../images/menu.png")} style={{width:Dimensions.get('window').width*0.05,height:Dimensions.get('window').height*0.05}}  onPress={navigation.openDrawer} />

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
    
    sceneAnimatedEnabled={true} 
   shifting={true}
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
    
  

    
        barStyle={{backgroundColor:'white'}}
        activeColor='#02b29f'>
      <Tab.Screen name="Home" component={MyStack}  />
      <Tab.Screen name="Saved" component={SavedStack} />
    {/* <Tab.Screen name="Register" component={Register} /> */}


    </Tab.Navigator>
  
  );
};

export default MyBottomTabNavigation;