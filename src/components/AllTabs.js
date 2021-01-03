import React,{Component} from 'react';
import General from './General';
import Business from './Business'
import Health from './Health'
import Technology from './Technology'
import Science from './Science'
import Sports from './Sports'
import Entertainment from './Entertainment'
import {Container,Header, Button, Left, Right,Tab,Icon, Tabs, ScrollableTab} from 'native-base';
import {NativeModules,processColor,StyleSheet,Text, useColorScheme} from 'react-native';
import {useTheme} from '@react-navigation/native';

function AllTabs({navigation,props}){
  var theme=useTheme();
  return <MyTabs navigation={navigation}  text={theme.colors.text} border={theme.colors.border} background={theme.colors.background}/>
}
class MyTabs extends Component{
  constructor(props){
    super(props);
   
    this.state={
      switch:false,


    }  
  }
 componentDidMount(){
    const { StatusBarManager } = NativeModules;
   
    StatusBarManager.setColor(processColor('red'), false);

  

  }
 


onToggleSwitch = () => this.setState({
 switch:!this.state.switch
});

changeValue=(itemValue)=>{
  
  this.setState({
    country:itemValue
  }) 
  console.log(this.state.country)
}
render(){
  var {text}=this.props;
  var {border}=this.props;
  var {background}=this.props;
  return (
 
   <Container style={styles.container}>
  
   <Tabs tabStyle={{backgroundColor:'white'}}  ref={(c)=> {this.tabs = c;return;} }
   renderTabBar={()=> <ScrollableTab style={{height:80}} />} tabBarUnderlineStyle={{borderBottomWidth:0.5}} >

          <Tab heading="General" textStyle={{color:'#6200ee'}} tabStyle={{ backgroundColor: 'white',}}  activeTabStyle={{ backgroundColor: 'white'}} activeTextStyle={{color: '#0cf2b4' , fontWeight: 'bold'}}>   
          <General />

          </Tab>
          <Tab heading="Business" textStyle={{color:'#6200ee'}}   tabStyle={{ backgroundColor: 'white'}}  activeTabStyle={{ backgroundColor: 'white'}} activeTextStyle={{color: '#0cf2b4', fontWeight: 'bold'}}  >
          <Business /> 
          </Tab>
         
          <Tab heading="Technology" textStyle={{color:'#6200ee'}}  tabStyle={{ backgroundColor: 'white'}}  activeTabStyle={{ backgroundColor: 'white'}}activeTextStyle={{color: '#0cf2b4', fontWeight: 'bold'}}>
            <Technology  />
          </Tab>
          <Tab heading="Health" textStyle={{color:'#6200ee'}}  tabStyle={{ backgroundColor: 'white'}}  activeTabStyle={{ backgroundColor: 'white'}} activeTextStyle={{color: '#0cf2b4', fontWeight: 'bold'}}>
            <Health  />
          </Tab>
          <Tab heading="Science" textStyle={{color:'#6200ee'}}  tabStyle={{ backgroundColor: 'white'}}  activeTabStyle={{ backgroundColor: 'white'}} activeTextStyle={{color: '#0cf2b4', fontWeight: 'bold'}}>
            <Science  />
          </Tab>
          <Tab heading="Sports" textStyle={{color:'#6200ee'}}  tabStyle={{ backgroundColor: 'white'}}  activeTabStyle={{ backgroundColor: 'white'}} activeTextStyle={{color:'#0cf2b4', fontWeight: 'bold'}}>
            <Sports   />
          </Tab>
          <Tab heading="Entertainment" textStyle={{color:'#6200ee'}}  tabStyle={{ backgroundColor: 'white'}}  activeTabStyle={{ backgroundColor: 'white'}} activeTextStyle={{color:'#0cf2b4', fontWeight: 'bold'}}>
            <Entertainment   />
          </Tab>
        </Tabs>
   
     

      </Container>


  );
}
};


const styles = StyleSheet.create({
  
  container:{
    justifyContent:"center",

  },

  footer: {
 fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    backgroundColor:'#0e9aa7'
  },
  header:{
    backgroundColor: 'white'//'#0e9aa7' #89d9c1
  },
  button:{
    backgroundColor:'#88304e',
    borderRadius:30,
   
  },
 tabs:{
   color:'red',
  
 }
  
});

export default AllTabs;