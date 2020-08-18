import React, {Component} from 'react';
import{ListItem, Left,Body,Right,Thumbnail,Text, CardItem,Icon} from 'native-base'
import {Linking, TouchableOpacity,StyleSheet, TouchableHighlight,Modal,View,Button, Image, Share} from 'react-native'
import moment from 'moment'

import { Avatar, Card, Title, Paragraph,FAB } from 'react-native-paper';
import Time from './time'
import Contents from './Contents'
import { WebView } from 'react-native-webview';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

 class DataSources extends Component{
constructor(props){
    super(props);
    this.data=props.data;
    this.fullData=props.data
    this.state={
    //  y:Animated.value,
      showModal : false,
      FillIcon:false,
      search:'',
      fullData:props.data

    }

}


  render(){
      return(
     
<View >
<ListItem style={{ borderColor:'black'}}>

<View />
<View>
<TouchableOpacity >
<View style={{padding:3,flexDirection:'row'}}>
 
  <Icon  style={{width:40}}name='md-newspaper-outline' />
      <Title style={{fontSize:15}}>{this.data.name}</Title>
      {/* <Paragraph>{this.data.description}</Paragraph> */}


 
   

  
  
</View>

</TouchableOpacity>
</View>
</ListItem>
{/* <View > 
<Image source= />
</View> */}

  
</View>
      )
  }  
}
const styles = StyleSheet.create({
  modal : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer : {
      backgroundColor : 'white',
      width : '90%',
      height : '90%',
  },
  ActivityIndicatorStyle: {
      flex: 1,
      
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
   
  },
  submit:{
    
   // backgroundColor:'#68a0cf',
    borderRadius:8,
    borderWidth: 3,
    borderColor: 'green',
    
  },
  btext:{
    color:'#fff',
    textAlign:'center',
  },

  image:{
    borderRadius:15,
    //opacity:0.7
    
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius:15,
    
  }
})
export default DataSources