// import React, {Component} from 'react';
// import{ListItem, Left,Body,Right,Thumbnail,Text,Icon, CardItem} from 'native-base'
// import {Linking, TouchableOpacity,StyleSheet, TouchableHighlight,Modal,View,Button, Image, Share} from 'react-native'
// import moment from 'moment'
// import { Avatar, Card, Title, Paragraph,FAB } from 'react-native-paper';
// import Time from './time'
// import { WebView } from 'react-native-webview';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

//  class sourcesDataItem extends Component{
// constructor(props){
//     super(props);
//     this.data=props.data;
//     this.fullData=props.data
//     this.state={
//     //  y:Animated.value,
//       showModal : false,
//       FillIcon:false,
//       search:'',
//       fullData:props.data

//     }

// }
// // handleSearch = search => {
// //   console.log("text",search);
// //   const formatQuery = search.toLowerCase();
// //   const data = _.filter(this.state.fullData,article => {
// //    if(this.data.title.includes(formatQuery)){
// //      return true
// //    }
// //    return false
// //   })
// //   this.setState({ search });
// // };
// hideModal(){
//   this.setState({
//     showModal:!this.state.showModal
//   })
// }
// shareArticle= async article =>{
//   try {
//  await Share.share({
//    message: "Check out this article:  " +article
//  })
//   }
//   catch(error)
//   {
//    console.log(error)
//   }
// }
// IconVisible(){
//   this.setState({
//     FillIcon:!this.state.FillIcon
//   })
// }
//   render(){
//       return(
// <View >
// <ListItem style={{ alignSelf:'center', borderColor:'black'}}>
// <View />
// <View>
// <TouchableOpacity onPress={() =>this.setState({showModal : !this.state.showModal})} >
// <View style={{padding:10}}>
//       <Card style={{ borderWidth:0.1}}>
//     <Card.Content>
//       <Title style={{fontSize:22,marginBottom:10}}>{this.data.name}</Title>
//     </Card.Content>
//     <View style={{padding:10}} >
//           <Text note style={{color:"red"}}>{this.data.name}</Text>        
//       </View>
//   <Card.Actions>
//   </Card.Actions>
//   </Card>
//   <FAB
//     //style={styles.fab}
//     color={this.state.FillIcon? '#403f3c': 'white'}
//     icon="heart"
//     style={[styles.fab,{color: this.state.FillIcon? '#fb3958': 'white',marginLeft:5, marginBottom:0 }]}
//     onPress={()=>this.IconVisible()}   
//   />
//   </View>
// </TouchableOpacity>
// </View>
// </ListItem>
// </View>
//       )
//   }  
// }










// const styles = StyleSheet.create({
//   modal : {
//       flex : 1,
//       justifyContent : 'center',
//       alignItems : 'center',
//       backgroundColor: 'rgba(0,0,0,0.5)'
//   },
//   modalContainer : {
//       backgroundColor : 'white',
//       width : '90%',
//       height : '90%',
//   },
//   ActivityIndicatorStyle: {
//       flex: 1,
//       justifyContent: 'center',
//   },
//   fab: {
//     position: 'absolute',
//     margin: 16,
//     right: 0,
//     bottom: 0,
   
//   },
//   submit:{
    
//    // backgroundColor:'#68a0cf',
//     borderRadius:8,
//     borderWidth: 3,
//     borderColor: 'green',
    
//   },
//   btext:{
//     color:'#fff',
//     textAlign:'center',
//   },

//   image:{
//     borderRadius:15,
//     //opacity:0.7
    
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     borderRadius:15,
    
//   }
// })
// export default sourcesDataItem
import React, {Component} from 'react';
import{ListItem, Left,Body,Right,Thumbnail,Text, CardItem,Icon} from 'native-base'
import {Linking, TouchableOpacity,StyleSheet, TouchableHighlight,Modal,View,Button, Image, Share} from 'react-native'
import moment from 'moment'

import { Avatar, Card, Title, Paragraph,FAB } from 'react-native-paper';

 class sourcesDataItem extends Component{
constructor(props){
    super(props);
    this.data=props.data;
    this.fullData=props.data
    this.state={
      showModal : false,
      FillIcon:false,
      search:'',
      fullData:props.data,
    }
}
  render(){
    // const { navigate } = this.props.navigation;

      return(
     
<View >
<ListItem  style={{ borderColor:'black'}}>
{/* onPress={()=>this.navigate("sourcesItem")} */}
<View />
<View>
<TouchableOpacity  style={{padding:3,flexDirection:'row'}}>
 
  <Icon   style={{width:40}}name='md-newspaper-outline' />
      {/* <Title style={{fontSize:15}}>{this.data.name} </Title> */}


<Text>SOURCE</Text>
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
export default sourcesDataItem

