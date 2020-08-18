import React, {Component} from 'react';
import{ListItem, Left,Body,Right,Thumbnail,Text,Icon, CardItem} from 'native-base'
import {Linking, TouchableOpacity,StyleSheet, TouchableHighlight,Modal,View,Button, Image, Share} from 'react-native'
import moment from 'moment'
import { Avatar, Card, Title, Paragraph,FAB } from 'react-native-paper';
import Time from './time'
import Contents from './Contents'
import { WebView } from 'react-native-webview';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

 class DataItem extends Component{
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
// handleSearch = search => {
//   console.log("text",search);
//   const formatQuery = search.toLowerCase();
//   const data = _.filter(this.state.fullData,article => {
//    if(this.data.title.includes(formatQuery)){
//      return true
//    }
//    return false
//   })
//   this.setState({ search });
// };
hideModal(){
  this.setState({
    showModal:!this.state.showModal
  })
}
shareArticle= async article =>{
  try {
 await Share.share({
   message: "Check out this article:  " +article
 })
  }
  catch(error)
  {
   console.log(error)
  }
}
IconVisible(){
  this.setState({
    FillIcon:!this.state.FillIcon
  })
}
  render(){
      return(
     
<View >

<ListItem style={{ alignSelf:'center', borderColor:'black'}}>
{/* style={{margin:10, borderRadius:15, backgroundColor:'rgba(0,0,0,0.2)', alignSelf:'center'}} */}
{/* <Left>
  <Thumbnail square style={{StyleSheet.absoluteFill}} source={{ uri:this.data.urlToImage != null ? this.data.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }} /
</Left> */}

{/* <Image  
style={[styles.image, StyleSheet.absoluteFill]} 
source={{ uri:this.data.urlToImage || 'https://www.labaleine.fr/sites/default/files/image-not-found.jpg'}}
 />  */}
{/* <View> style={styles.background} */}
<View />
<View>
<TouchableOpacity onPress={() =>this.setState({showModal : !this.state.showModal})} >
<View style={{padding:10}}>
 
      {/* <Text style={{color:'white', padding:5,fontWeight:'bold',fontSize:20}} >{this.data.title}</Text> */}
      {/* <Text style={{color:'white', padding:5}} note numberOfLines={3}>{this.data.description} </Text> */}
    
    {/* <View style={{padding:10}} >
          <Text note style={{color:"red"}}>{this.data.source.name}</Text>
          <Text style={{color:'white'}} note>{moment(this.data.publishedAt || moment.now()).fromNow()}</Text>
          
      </View>  */}

      <Card style={{ borderWidth:0.1}}>
        {/* <Card.Title  left={(props) => <Avatar.Icon {...props} icon="heart"  />} /> */}
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      <Title style={{fontSize:22,marginBottom:10}}>{this.data.title}</Title>
      {/* <Paragraph>{this.data.description}</Paragraph> */}
   
    </Card.Content>
    <Card.Cover source={{ uri: this.data.urlToImage }} />
    <View style={{padding:10}} >
          <Text note style={{color:"red"}}>{this.data.source.name}</Text>
          <Text style={{color:'black'}} note>{moment(this.data.publishedAt || moment.now()).fromNow()}</Text>
          
      </View>
  <Card.Actions>
  {/* <Avatar.Icon size={40} icon="heart"   /> */}
 
  </Card.Actions>
    {/* <Card.Actions>
      <Button>View</Button>
    </Card.Actions> */}
  </Card>
  <FAB
    //style={styles.fab}
    color={this.state.FillIcon? '#403f3c': 'white'}
    icon="heart"
    style={[styles.fab,{color: this.state.FillIcon? '#fb3958': 'white',marginLeft:5, marginBottom:0 }]}
    onPress={()=>this.IconVisible()}   
  />
  
</View>

</TouchableOpacity>

{/* <Icon name="heart" style={{color: this.state.FillIcon? '#fb3958': 'white',marginLeft:5, marginBottom:0 }} type={this.state.FillIcon? "Entypo":"Feather" } onPress={()=>this.IconVisible()}/> */}
</View>
</ListItem>
{/* <View > 
<Image source= />
</View> */}

  <Modal  visible={this.state.showModal} 
  onRequestClose={() => { this.hideModal()} } >
   
  <View style={styles.modal}>

      <View style={styles.modalContainer}>
      <View style={{flexDirection: 'row-reverse', backgroundColor: 'transparent'}}  >
  <Button  title='X' onPress={()=>{ this.hideModal()}} color="#a30907" />
  </View>
          <WebView 
              style={{ flex : 1 }} 
              source={{uri: this.data.url}}
              renderLoading={this.ActivityIndicatorLoadingView} 
              />
      </View>
     <View style={{flexDirection:'row', flexWrap:'wrap', padding:5}}> 
      {/* <Button style={{marginLeft:20}} title="Share"onPress={()=>this.shareArticle(this.data.url)} /> */}
      <Icon name="share" type="SimpleLineIcons" style={{color:'white'}} onPress={()=>this.shareArticle(this.data.url)} />
      </View>
  </View>
 
</Modal>
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
      justifyContent: 'center',
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
export default DataItem