import React, {Component} from 'react';
import{ListItem, Left,Body,Right,Thumbnail,Text,Icon, CardItem} from 'native-base'
import {Linking, TouchableOpacity,StyleSheet, TouchableHighlight,Modal,View,Button, Image, Share} from 'react-native'
import moment from 'moment'
import { Avatar, Card, Title, Paragraph,FAB } from 'react-native-paper';
import { WebView } from 'react-native-webview';



class DataItem extends Component{
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

<View />
<View>
<TouchableOpacity onPress={() =>this.setState({showModal : !this.state.showModal})} >
<View style={{padding:10}}>

  

      <Card style={{ borderWidth:0.1}}>
   
    <Card.Content>
      <Title style={{fontSize:22,marginBottom:10}}>{this.data.title}</Title>

   
    </Card.Content>
    <Card.Cover source={{ uri: this.data.urlToImage }} />
    <View style={{padding:10}} >
          <Text note style={{color:"red"}}>{this.data.source.name}</Text>
          <Text style={{color:'black'}} note>{moment(this.data.publishedAt || moment.now()).fromNow()}</Text>
          <Text note style={{marginTop:15}}>Click to view full article</Text>
      </View>
  <Card.Actions>
 
  </Card.Actions>
   
  </Card>
  <FAB
 
    color={this.state.FillIcon? '#403f3c': 'white'}
    icon="heart"
    style={[styles.fab,{color: this.state.FillIcon? '#fb3958': 'white',marginLeft:5, marginBottom:0 }]}
    onPress={()=>this.IconVisible()}
  />

</View>

</TouchableOpacity>

</View>
</ListItem>


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
    backgroundColor:'#0cf2b4'
    

   
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