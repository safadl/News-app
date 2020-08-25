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
import {NativeModules,processColor,StyleSheet,Text} from 'react-native';
import {Switch} from 'react-native-paper';


export default class AllTabs extends Component{
  constructor(props){
    super(props);
   
    this.state={
      toggle:true,
      isSwitchOn:false,
     // MyactiveTab:this.props.isPressed
    active:this.props.isPressed

    }  
  }
 componentDidMount(){
     // SplashScreen.hide();
    const { StatusBarManager } = NativeModules;
   
    StatusBarManager.setColor(processColor('red'), false);
    // setTimeout(() => {
    //   this.setState({
    //     MyactiveTab:this.props.isPressed
    //    });
    // }, 1000);
    setTimeout(this.tabs.goToPage.bind(this.tabs, this.props.isPressed));
  

  }
 
 
  // componentWillUpdate(){
  //   this.setState({
  //     activeTab:this.props.pressed
  //   })
  // }
  toggleF(){
    this.setState({
  toggle:!this.state.toggle 
})
console.log(this.state.toggle)
}
// changePage(page){ 
//   this.setState({
//     activeTab:page
//   })
// }
onToggleSwitch = () => this.setState({
  isSwitchOn:!this.state.isSwitchOn
});
// changePage = (page)=>{
//   this.tabs.goToPage(props.pressed)
 
// }

render(){
  // <MyDrawer colorr={this.state.isSwitchOn} />
 
  return (
 
   <Container style={styles.container}>
{/*    
            <Header androidStatusBarColor={this.state.isSwitchOn? '#000000': '#02b29f'} style={{display:'none'}} iosBarStyle={this.state.isSwitchOn? "light-content" : "dark-content"} style={{backgroundColor:this.state.isSwitchOn? '#000000': 'white'}}  leftComponent={{ icon: 'menu', color: 'white' }}>
            <Left>
              <Button transparent >
              <Icon
              type="Feather"
              name='menu'
             style={{ color:this.state.isSwitchOn? '#02b29f': '#b0b0b0' }}  
              onPress={this.props.navigation.openDrawer}/>
              </Button>
             </Left>
            <Right />
          
  <Right/>
  
  
  <Switch 
  value={this.state.isSwitchOn} 
  onValueChange={this.onToggleSwitch}
  />  
          </Header> */}
   <Tabs   ref={(c)=> {this.tabs = c;return;} }
   renderTabBar={()=> <ScrollableTab style={{height:80}} />} tabBarUnderlineStyle={{borderBottomWidth:1}} >

          <Tab heading="World" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white"}} activeTextStyle={{color: '#900c3f', fontWeight: 'bold'}} titleFontSize = {{fontSize:"100"}}>

            <World color={this.state.isSwitchOn} />
          </Tab>
          <Tab heading="General"  tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white"}} activeTextStyle={{color: '#89d9c1', fontWeight: 'bold'}}>   
          <General   color={this.state.isSwitchOn} />

          </Tab>
          <Tab heading="Business" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white" }} activeTextStyle={{color: '#ff5f40', fontWeight: 'bold'}} >
          <Business   color={this.state.isSwitchOn} /> 
          </Tab>
         
          <Tab heading="Technology" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white" }} activeTextStyle={{color: '#14b1ab', fontWeight: 'bold'}}>
            <Technology   color={this.state.isSwitchOn} />
          </Tab>
          <Tab heading="Health" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white" }} activeTextStyle={{color: '#5fdde5', fontWeight: 'bold'}}>
            <Health color={this.state.isSwitchOn} />
          </Tab>
          <Tab heading="Science" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white" }} activeTextStyle={{color: '#ff9a76', fontWeight: 'bold'}}>
            <Science   color={this.state.isSwitchOn} />
          </Tab>
          <Tab heading="Sports" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white"}} activeTextStyle={{color: '#844685', fontWeight: 'bold'}}>
            <Sports   color={this.state.isSwitchOn} />
          </Tab>
          <Tab heading="Entertainment" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{backgroundColor: "white"}} activeTextStyle={{color: '#dd7631', fontWeight: 'bold'}}>
            <Entertainment  color={this.state.isSwitchOn} />
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

