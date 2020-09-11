// import * as React from 'react';
// import {View} from 'react-native'


// class PopularSources extends Component {
//     state = {  }
//     render() {
//         return (
//             <View>
//                 <Text>Popular Sources</Text>
//             </View>
//         );
//     }
// }

// export default PopularSources;
import React from 'react'
import {StyleSheet, View,Alert, ActivityIndicator,ScrollView,Dimensions,FlatList} from 'react-native';
import {List , Button , ListItem,Left, Body,Right, Thumbnail,Container, Content } from 'native-base'
import {getArticlesSources} from './service/Sources'
import DataItem from './DataItem'
import DrawerSources from './DrawerSources';
import {useTheme} from '@react-navigation/native'
import { Avatar, Card, Title, Paragraph,FAB } from 'react-native-paper';
import {
    DrawerItem,
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
  import {
  
    Drawer,
    Text,
    TouchableRipple,
  } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

class PopularSources extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            data:null,
           
        }
    }
    componentDidMount(){
        getArticlesSources().then(data=>{
            this.setState({
                isLoading:false,
                data:data,
                
               
            });
        },error=>{
  Alert.alert('Error', 'Something went wrong');
        
        })
    }
    render(){

      //  console.log("data : ",this.state.data);
    let view = this.state.isLoading ? (
        <View  style={{justifyContent:'center', textAlign:'center'}}> 
<ActivityIndicator style={{margin:Dimensions.get('window').height/8}} animating={this.state.isLoading} color='#89d9c1'size='large'/>
        </View>
    ) : 
    ( 
        <View >
        <FlatList 
        data={this.state.data}
        renderItem={({item}) => {
            return(
                <DrawerSources  data={item}  />
               
            );
        }

        }
        />
        </View>     
    )
        return(
          
            <DrawerContentScrollView {...this.props}>
            <View
              style={
                styles.drawerContent
              }
            >
      
          <View  style={styles.userInfoSection}>
         <Drawer.Section title="Popular Sources" >
               
                  <View style={styles.preference}>
                 
                    <View  >
                    {view}
                    
                    </View>
                  </View>
              </Drawer.Section>
            </View>
            </View>
          </DrawerContentScrollView>
        )
   
}
}
const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
},
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 10,
        
      },
      title: {
        marginTop: 20,
        fontWeight: 'bold',
        
      },
      caption: {
        fontSize: 15,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        
      },

});

export default PopularSources;

