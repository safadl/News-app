import React,{Component} from 'react';
import World from './World';
import General from './General';
import Business from './Business'
import Health from './Health'
import Technology from './Technology'
import Science from './Science'
import Sports from './Sports'
import Entertainment from './Entertainment'
import {Container,Header, Button, Left, Right,Tab,Icon, Tabs, ScrollableTab} from 'native-base';
import {NativeModules,processColor,StyleSheet,Text, useColorScheme} from 'react-native';

export default class AllTabs extends Component{
  constructor(props){
    super(props);
   
    this.state={
      toggle:true,
      isSwitchOn:false,


    }  
  }
 componentDidMount(){
    const { StatusBarManager } = NativeModules;
   
    StatusBarManager.setColor(processColor('red'), false);

  

  }
 
 
  toggleF(){
    this.setState({
  toggle:!this.state.toggle 
})
console.log(this.state.toggle)
}

onToggleSwitch = () => this.setState({
  isSwitchOn:!this.state.isSwitchOn
});

changeValue=(itemValue)=>{
  
  this.setState({
    country:itemValue
  }) 
  console.log(this.state.country)
}
render(){
 
  return (
 
   <Container style={styles.container}>


  
   <Tabs   ref={(c)=> {this.tabs = c;return;} }
   renderTabBar={()=> <ScrollableTab style={{height:80}} />} tabBarUnderlineStyle={{borderBottomWidth:1}} >

          <Tab heading="World" tabStyle={{backgroundColor:'white' }} activeTabStyle={{ backgroundColor: "white"}} activeTextStyle={{color: '#900c3f', fontWeight: 'bold'}} titleFontSize = {{fontSize:"100"}}>
            <World />
          </Tab>
          <Tab heading="General"  tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white"}} activeTextStyle={{color: '#89d9c1', fontWeight: 'bold'}}>   
          <General />

          </Tab>
          <Tab heading="Business" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white" }} activeTextStyle={{color: '#ff5f40', fontWeight: 'bold'}} >
          <Business /> 
          </Tab>
         
          <Tab heading="Technology" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white" }} activeTextStyle={{color: '#14b1ab', fontWeight: 'bold'}}>
            <Technology  />
          </Tab>
          <Tab heading="Health" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white" }} activeTextStyle={{color: '#5fdde5', fontWeight: 'bold'}}>
            <Health  />
          </Tab>
          <Tab heading="Science" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white" }} activeTextStyle={{color: '#ff9a76', fontWeight: 'bold'}}>
            <Science  />
          </Tab>
          <Tab heading="Sports" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white"}} activeTextStyle={{color: '#844685', fontWeight: 'bold'}}>
            <Sports   />
          </Tab>
          <Tab heading="Entertainment" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{backgroundColor: "white"}} activeTextStyle={{color: '#dd7631', fontWeight: 'bold'}}>
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

