import React from 'react'
import {StyleSheet, View, Text,Alert, ActivityIndicator,ScrollView,Dimensions,FlatList} from 'react-native';
import {List , Button , ListItem,Left, Body,Right, Thumbnail,Container, Content } from 'native-base'
import {getArticlesH} from './service/newsHead'
import DataItem from './DataItem'
import { SearchBar} from 'react-native-elements';
import _ from 'lodash'
import {Picker} from '@react-native-community/picker';

class General extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            data:null,
            fullData:[],          
            country:''

           
        }
    }
    componentDidMount(){
        this.makeRemoteRequest();

    }
    makeRemoteRequest = _.debounce(() => {
        
        this.setState({
          isLoading:true
      })
        getArticlesH('general', this.state.country).then(data=>{
     
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
      changeValue=(itemValue)=>{
  
        this.setState({
          country:itemValue
        }) 
        console.log(this.state.country)
        this.makeRemoteRequest()
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
     //   underlineColorAndroid="#985bef"
         showLoading={true}
        containerStyle={{backgroundColor:"white",borderTopColor:"white",borderBottomColor:"white"}}
        inputContainerStyle={{backgroundColor:"white"}}
        icon = {"search", "red"}
         onChangeText={this.handleSearch}
      />
        );
      }; 




    render(){
      //  console.log("data : ",this.state.data);
    let view = this.state.isLoading ? (
        <View style={{justifyContent:'center', textAlign:'center'}}> 
<ActivityIndicator style={{margin:Dimensions.get('window').height/4}} animating={this.state.isLoading} color='#89d9c1'size='large'/>
        </View>
    ) : 
    (
        
        <FlatList
        keyExtractor={(item, index) => `${index}`}
        ListHeaderComponent={this.renderHeader} 
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
            <Container><Picker
            selectedValue={this.state.country}
              style={{height: 50, width: 200, alignSelf:'center',margin:15}}
              onValueChange={(itemValue) =>
            this.changeValue(itemValue) 
              }>
              <Picker.Item label="Select a country" value="" />
              <Picker.Item label="Argentina" value="ar" />
              <Picker.Item label="Austria" value="at"/>
              <Picker.Item label="Australia" value="au"/>
              <Picker.Item label='Belgium' value="be" />
              <Picker.Item label='Bulgaria' value="bg" />
              <Picker.Item label='Brazil' value="br" />
              <Picker.Item label="Canada" value="ca" />
              <Picker.Item label="China" value="cn" />
              <Picker.Item label="Colombia" value="co" />
              <Picker.Item label="Cuba" value="cu" />
              <Picker.Item label="Czech Republic" value="cz" />
              <Picker.Item label='Egypt' value="eg" />
              <Picker.Item label='France' value="fr" />
              <Picker.Item label='Germany' value="de" />
              <Picker.Item label="Greece" value="gr" />
              <Picker.Item label='Hong Kong' value="hk" />
              <Picker.Item label="Hungary" value="hu" />
              <Picker.Item label='India' value="in" />
              <Picker.Item label="Indonesia" value="id" />
              <Picker.Item label="Ireland" value="ie" />
              <Picker.Item label='Italy' value="it" />
              <Picker.Item label='Japan' value="jp" />
              <Picker.Item label="Latvia" value="lv" />
              <Picker.Item label="Lithuania" value="lt" />
              <Picker.Item label="Malaysia" value="my" />
              <Picker.Item label='Mexico' value="mx" />
              <Picker.Item label='Morocco' value="ma" />
              <Picker.Item label='Netherlands' value="nl" />
              <Picker.Item label="New Zealand" value="nz" />
              <Picker.Item label="Nigeria" value="ng" />
              <Picker.Item label="Norway" value="no" />
              <Picker.Item label="Philippines" value="ph" />
              <Picker.Item label="Poland" value="pl" />
              <Picker.Item label="Portugal" value="pt" />
              <Picker.Item label="Romania" value="ro" />
              <Picker.Item label='Russia' value="ru" />
              <Picker.Item label="Saudi Arabia" value="sa" />
              <Picker.Item label="Serbia" value="rs" />
              <Picker.Item label="Singapore" value="sg" />
              <Picker.Item label="Slovenia" value="sl" />
              <Picker.Item label="South Africa" value="za" />
              <Picker.Item label='South Korea' value="sk" />
              <Picker.Item label="Sweden" value="se" />
              <Picker.Item label="Switzerland" value="ch" />
              <Picker.Item label="Taiwan" value="tw" />
              <Picker.Item label="Thailand" value="th" />
              <Picker.Item label='Turkey' value="tr" />
              <Picker.Item label='UK' value="gb" />
              <Picker.Item label="USA" value="us" />
              <Picker.Item label="Ukraine" value="ua" />
              <Picker.Item label="Venezuela" value="ve" />
            </Picker><Content style={{backgroundColor:this.props.color? "#000000" : 'white' }}>{view}</Content></Container> 
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
export default General;