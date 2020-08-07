import React from 'react'
import {StyleSheet, View, Text,Alert, ActivityIndicator,ScrollView, Modal,Dimensions, FlatList} from 'react-native';
import {List , Button , ListItem,Left, Body,Right, Thumbnail,Container, Content } from 'native-base'
import {getArticles} from './service/news'
import DataItem from './DataItem'
class World extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            data:null,
            // setModalVisibility: false,
            // modalArticleData:{}
           
        }
    }
    componentDidMount(){
        getArticles().then(data=>{
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
        <View style={[styles.activity, styles.horizontal]}> 
<ActivityIndicator style={{margin:Dimensions.get('window').height/4}} animating={this.state.isLoading} size='large' color='#900c3f'/>
        </View>
    ) : 
    (
       
        
         <FlatList 
         data={this.state.data}
         renderItem={({item}) => {
             return(
                 <DataItem  data={item}  />
             );
         }
 
         }
         />
         
    )
        return(
            // <View style={{backgroundColor:this.props.color? 'white' : "#444444"}} >       
            <Container>
                <Content style={{backgroundColor:this.props.color? "#000000" : 'white' }}>{view}
                </Content> 
                {/* <Contents /> */}
                </Container> 
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
    
},
activity: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
})
export default World;