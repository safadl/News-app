import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './Home'
import AllTabs from './AllTabs'
import SavedScreen from './SavedScreen'
import { fill } from 'lodash';
import Login from './Login'
const MyBottomNavigation = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'home', title: 'Home', icon: 'home-outline'},
      { key: 'saved', title: 'Saved', icon: 'heart-outline' },
      { key: 'login', title: 'Account', icon:'face' },

    ]);
  
    const renderScene = BottomNavigation.SceneMap({
     
      home:Home,
     saved:SavedScreen,
     login:Login

    });
  
    return (
      <BottomNavigation
      shifting={true}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{backgroundColor:'white'}}
        activeColor='#02b29f'
        //'#02b29f'
      />
      );
    };
export default MyBottomNavigation;