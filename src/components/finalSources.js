import React from 'react'
import {StyleSheet, View, Text,Alert, ActivityIndicator,ScrollView, Dimensions,FlatList} from 'react-native';
import {List , Button , ListItem,Left, Body,Right, Thumbnail,Container, Content } from 'native-base'
import {getArticlesSources} from './service/Sources'
import sourcesDataItem from './sourcesDataItem'
class finalSources extends React.Component{
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
        <View style={{justifyContent:'center', textAlign:'center'}}> 
<ActivityIndicator style={{margin:Dimensions.get('window').height/4}}animating={this.state.isLoading} size='large' color='#844685'/>
        </View>
    ) : 
    (
        
        <FlatList 
        data={this.state.data}
        renderItem={({item}) => {
            return(
               <sourcesDataItem  data={item}  />
            );
        }

        }
        />
         
    )
        return(
            // <View style={{backgroundColor:this.props.color? 'white' : "#444444"}} >       
            <Container><Content style={{backgroundColor:this.props.color? "#000000" : 'white' }}>{view}</Content></Container> 
            // </View>
        )
   
}
}
const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
    
}
})
export default finalSources;