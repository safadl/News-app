import React from 'react'
import {StyleSheet, View,Alert, ActivityIndicator,Dimensions, FlatList} from 'react-native';
import { SearchBar,Icon} from 'react-native-elements';
import {Container, Content } from 'native-base'
import {getArticles} from './service/news'
import DataItem from './DataItem'
import _ from 'lodash' 
import {MyTheme} from './themes'
class World extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            query: "",
            error:null,
            isLoading:false,
            data:[],
            fullData:[] ,

           
        }
    } 
    
    componentDidMount() {
 

        this.makeRemoteRequest();
      };
 

      makeRemoteRequest = _.debounce(() => {
        
        this.setState({
          isLoading:true
      })
        getArticles().then(data=>{
     
            this.setState({
               
                data:data,
                fullData:data,
                isLoading:false,
                  
            });
             
        },error=>{
    Alert.alert('Error', 'Something went wrong');
        this.setState({error,isLoading:false})
        }
        )
      //
        
    },250);
    handleSearch = search => { 
        console.log("TEXTTTTTT : ***********************************************************",search); 
        const formatQuery = search.toLowerCase();
       
        const data = _.filter(this.state.fullData, article => {
            
           if(article.title.toLowerCase().includes(formatQuery)) console.log(article.title)
          
          return ((article.title.toLowerCase().includes(formatQuery))||(article.source.name.toLowerCase().includes(formatQuery)))
          
        }
        )
       this.setState({ query: formatQuery,data});
 
      };

      renderHeader = () => {
        const { query } = this.state;
        return (
          <SearchBar
        
        placeholder="Search..."
      
        value={query}
        lightTheme={true}
        autoCorrect={false} 
        color="black"
        round={true}
         showLoading={true}
        containerStyle={{backgroundColor:"white",borderTopColor:"white",borderBottomColor:"white"}}
        inputContainerStyle={{backgroundColor:"white"}}
        icon = {"search", "red"}
         onChangeText={this.handleSearch}
      />
        );
      };  
     
    render(){

    let view = this.state.isLoading ? (
        <View style={[styles.activity, styles.horizontal]}> 
<ActivityIndicator style={{margin:Dimensions.get('window').height/4}} animating={this.state.isLoading} size='large' color='#900c3f'/>
        </View>
    ) : 
     (
       
          // <View style={{backgroundColor:MyTheme.colors.background}}>

         <FlatList 
        
       keyExtractor={(item, index) => `${index}`}
        ListHeaderComponent={this.renderHeader} //this

         data={this.state.data}
         renderItem={({item}) => {
             return(
                 <DataItem  data={item} />
             );
         }
 
         }
     
         />
        //  </View>
         
    )
        return(
            <Container >
                <Content >{view}
                </Content> 
                </Container> 
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
  },
  
})
export default World;