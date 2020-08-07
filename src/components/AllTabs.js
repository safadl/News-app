
//import 'react-native-gesture-handler';
import React from 'react';
/*import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';*/
import World from './World';
import General from './General';
import Business from './Business'
import Health from './Health'
import Technology from './Technology'
import Science from './Science'
import Sports from './Sports'
import Entertainment from './Entertainment'
import MyHeader from './MyHeader'
import { Container,Header, Title, Button, Left, Right, Body,Footer, FooterTab,Text,Content,Icon,Tab, Tabs, ScrollableTab} from 'native-base';
//import SplashScreen from 'react-native-splash-screen'
import { IsEmpty, Map } from "react-lodash";
import _, { stubFalse } from 'lodash';
import {ScrollView, StyleSheet,StatusBar, TouchableOpacity, NativeModules,processColor, View} from 'react-native';
import { Switch } from 'react-native-paper';
import MySwitch from './MySwitch';
import MyDrawer from './MyDrawer';
import MyLottie from './MyLottie';


class AllTabs extends React.Component{
  constructor(props){
    super(props);
    this.state={
      toggle:true,
      isSwitchOn:false

    }  }
 componentDidMount(){
    
     // SplashScreen.hide();
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

render(){
  <MyDrawer colorr={this.state.isSwitchOn} />
  return (
 
   <Container style={styles.container}>
       {/* <MyLottie /> */}
             {/* #89d9c1 */}
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
    
  {/* <MySwitch /> */}
  <Switch 
  value={this.state.isSwitchOn} 
  onValueChange={this.onToggleSwitch}

  />
            {/* <Button transparent onPress={()=>this.toggleF()}>
              <Icon
              type="MaterialIcons"
              name='brightness-4'
              color='#ffff'/>
             </Button> */}
    {/* <Switch
    value={true}
    onValueChange={(val) => console.log(val)}
    disabled={true}
    activeText={'On'}
    inActiveText={'Off'}
    // circleSize={30}
    // barHeight={1}
    //circleBorderWidth={3}
    backgroundActive={'white'}
    //backgroundInactive={'gray'}
   // circleActiveColor={'#30a566'}
    //circleInActiveColor={'#000000'}
    changeValueImmediately={true}
    // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
    outerCircleStyle={{}} // style for outer animated circle
    renderActiveText={false}
    renderInActiveText={false}
    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
    switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
    switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
  /> */}
             
           
          </Header>
   <Tabs renderTabBar={()=> <ScrollableTab />} tabBarUnderlineStyle={{borderBottomWidth:1}} >

          <Tab heading="World" style={styles.tabs}  tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white"}} activeTextStyle={{color: '#900c3f', fontWeight: 'bold'}}>
            <World color={this.state.isSwitchOn} />
          </Tab>
          <Tab heading="General" style={styles.tabs} tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white"}} activeTextStyle={{color: '#89d9c1', fontWeight: 'bold'}}>   
          <General   color={this.state.isSwitchOn} />

          </Tab>
          <Tab heading="Business" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white", textColor:'red' }} activeTextStyle={{color: '#ff5f40', fontWeight: 'bold'}}>
          <Business   color={this.state.isSwitchOn} /> 
          </Tab>
          <Tab heading="Technology" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white", textColor:'red' }} activeTextStyle={{color: '#14b1ab', fontWeight: 'bold'}}>
            <Technology   color={this.state.isSwitchOn} />
          </Tab>
          <Tab heading="Health" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white", textColor:'red' }} activeTextStyle={{color: '#5fdde5', fontWeight: 'bold'}}>
            <Health color={this.state.isSwitchOn} />
          </Tab>
          <Tab heading="Science" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white", textColor:'red' }} activeTextStyle={{color: '#ff9a76', fontWeight: 'bold'}}>
            <Science   color={this.state.isSwitchOn} />
          </Tab>
          <Tab heading="Sports" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white", textColor:'red' }} activeTextStyle={{color: '#844685', fontWeight: 'bold'}}>
            <Sports   color={this.state.isSwitchOn} />
          </Tab>
          <Tab heading="Entertainment" tabStyle={{ backgroundColor: "white" }} activeTabStyle={{ backgroundColor: "white", textColor:'red' }} activeTextStyle={{color: '#dd7631', fontWeight: 'bold'}}>
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
   color:'red' 
 }
  
});

export default AllTabs;
