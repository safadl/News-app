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
import { TouchableHighlight } from 'react-native-gesture-handler';
import sourcesDataItem from './sourcesDataItem';
import DrawerSources from './DrawerSources'
import finalSources from './finalSources'
import PopularSources from './PopularSources'
import MyDStack from './MyDStack'
import Register from './Register'
//import StackNav from './MyStack'
const Stack = createStackNavigator();

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
   title:"Tabs" ,
 
// headerStyle: {
//   backgroundColor: '#f4511e'
// },
// headerTintColor: '#fff',
headerRight:()=>(
<Switch 
  value={true} 
 onValueChange={console.log('toggled')}
  />  
),
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
 <Stack.Screen name="DrawerSources" component={MyDStack} />
</Stack.Navigator>

  
 
  );

};

// const MyBottomNavigation = () => {
//     const [index, setIndex] = React.useState(0);
//     const [routes] = React.useState([
//       { key: 'home', title: 'Home', icon: 'home-outline'},
//       { key: 'saved', title: 'Saved', icon: 'heart-outline' },
//       { key: 'login', title: 'Account', icon:'face' },
//       { key: 'MyStack', title: 'Nav'},


//     ]);
  
//     const renderScene = BottomNavigation.SceneMap({
     
//       home:Home,
//      saved:SavedScreen,
//      login:Login,
//       MyStack:MyStack
//     });
  
//     return (
//       <BottomNavigation
//       shifting={true}
//         navigationState={{ index, routes }}
//         onIndexChange={setIndex}
//         renderScene={renderScene}
//         barStyle={{backgroundColor:'white'}}
//         activeColor='#02b29f'
//         //'#02b29f'
//       />
//       );
//     };
// export default MyBottomNavigation;

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
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Account" component={Login} />
      <Tab.Screen name="Register" component={Register} />


    </Tab.Navigator>
  );
};

export default MyBottomTabNavigation;