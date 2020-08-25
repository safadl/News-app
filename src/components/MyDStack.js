import sourcesDataItem from './sourcesDataItem';
import DrawerSources from './DrawerSources';
import finalSources from './finalSources'
import {createStackNavigator} from '@react-navigation/stack';


const DStack= createStackNavigator();

export default function MyDStack({navigation}){

  return(
    <DStack.Navigator>
          <DStack.Screen name='DrawerSources' component={DrawerSources} />
          <DStack.Screen name="sourcesDataItem" component={sourcesDataItem} />

    <DStack.Screen  name ="finalSources" component={finalSources}/>
    </DStack.Navigator>

  )
}
