import React, { Component } from 'react';
import {  FlatList,View,Text,StyleSheet,Dimensions,ScrollView,Image} from 'react-native';
const numColumns =2;
import {Surface} from 'react-native-paper'
const WIDTH = Dimensions.get('window').width
const dataList= [{key:'General', imageUri:require('../images/international.png')},{key:'Science', imageUri:require('../images/flask.png')},{key:'Business', imageUri:require('../images/supermarket.png')},{key:'Health', imageUri:require('../images/heartbeat.png')},{key:'Sport', imageUri:require('../images/bike.png')},{key:'Technology', imageUri:require('../images/brain.png')},,{key:'Entertainement', imageUri:require('../images/game-controller.png')}]
class Home extends Component {
    constructor(props) {
        super(props);
   
    }
    _renderItem=({item,index})=> {
      return(
       <View style={styles.itemStyle}>
          
           <Text style={styles.itemText}>{item.key}</Text>
           <Image style={{width:50,height:50}} source={item.imageUri} />
       </View> 

      )
    }
    render() {
        let {container,itemStyle}= styles
        return (
            <ScrollView>

                <View style={{justifyContent:'center',alignItems:'center',margin:10}}>
               
            <Text style={{fontSize:50}}>Headlines</Text>
            </View>
           <FlatList 
           data={dataList}
           renderItem={this._renderItem}
           keyExtractor={(item,index)=>index.toString() }
           numColumns={numColumns}
           style={{padding:10}}
           />
           </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
       
        paddingTop:40,
        margin:2
    },
    surface: {
        padding: 8,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        borderRadius:10
      },
    itemStyle:{
    backgroundColor:'#851621',
    alignItems:'center',
    justifyContent:'center',
    height:100,
    flex:1,
    margin:2,
    height:WIDTH/numColumns,
    borderRadius:10
    },
    itemText:{
     color:'#ffff',
     fontSize:30
    }
})
export default Home;