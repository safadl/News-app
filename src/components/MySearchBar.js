// import * as React from 'react';
// import { Searchbar } from 'react-native-paper';

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = React.useState('');

//   const onChangeSearch = query => setSearchQuery(query);

//   return (
//     <Searchbar
//       placeholder="Search"
//       onChangeText={onChangeSearch}
//       value={searchQuery}
//       style={{margin:10}}
//     />
//   );
// };
import { SearchBar,Icon } from 'react-native-elements';
import * as React from 'react';
import {View,ActivityIndicator} from 'react-native'
import _ from 'lodash';
import DataItem from './DataItem'
import {getArticles} from './service/news'
 class MySearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    query: "",
    error:null,
    isLoading:false,
    data:[],
    fullData:[]
  };
  //this.renderHeader = this.renderHeader.bind(this);
}
componentDidMount() {
  this.makeRemoteRequest();
}

makeRemoteRequest = _.debounce(() => {
  this.setState({ isLoading: true });

// componentDidMount(){
//   getArticles().then(data=>{
//       this.setState({
//           isLoading:false,
//           data:data,
          
         
//       });
//   },error=>{
// Alert.alert('Error', 'Something went wrong');
  
//   })

      getArticles(this.state.query).then(data=>{
        this.setState({
            isLoading:true,
            data:data,
            fullData:data
               
        });
    },error=>{
Alert.alert('Error', 'Something went wrong');
    this.setState({isLoading:false})
    })
  },250);

  handleSearch = search => { 
    console.log("text",search);
    const formatQuery = search.toLowerCase();
   
    const data = _.filter(this.state.fullData, article => {
     if(article.title.includes(formatQuery)){
      console.log(article.title)
      return true
       
     }
     return false
    })
    this.setState({ query: formatQuery,data},()=>this.makeRemoteRequest());
  };

  // handleSearch = text =>{
  //   console.log("text", text)
  //   this.setState({
  //     query: text
  //   });
  // }
  renderHeader = () => {
    const { query } = this.state;
    return (
      <SearchBar
    
    placeholder="Search..."
  
    value={query}
    lightTheme={true}
    
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
  render() {
    

    return (
      <View style={{margin:4}} > 
    {this.renderHeader()}
      </View>
    );
  }
}
export default MySearchBar;