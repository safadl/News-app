// import React, { Component } from 'react';
// import { Container, Header, Title, Button, Left, Right, Body,Footer, FooterTab,Text,Content,Icon,Tab, Tabs, ScrollableTab} from 'native-base';
// import {ScrollView, StyleSheet,StatusBar, TouchableOpacity, NativeModules,processColor, View,useWindowDimensions} from 'react-native';
// import {Switch} from 'react-native-paper'
// class MyHeader extends Component {
//    constructor(props){
//        super(props)
//        this.state={
//         isSwitchOn:false
//        }
//    }
//    onToggleSwitch = () => this.setState({
//     isSwitchOn:!this.state.isSwitchOn
//   });
//     render() {
//         return (
//         <Container>
//            <Header androidStatusBarColor={this.state.isSwitchOn? '#000000': '#02b29f'} style={{display:'none'}} iosBarStyle={this.state.isSwitchOn? "light-content" : "dark-content"} style={{backgroundColor:this.state.isSwitchOn? '#000000': 'white'}}  leftComponent={{ icon: 'menu', color: 'white' }}>
//             <Left>
//               <Button transparent >
//               <Icon
//               type="Feather"
//               name='menu'
//              style={{ color:this.state.isSwitchOn? '#02b29f': '#b0b0b0' }}  
//               onPress={this.props.navigation.openDrawer}/>
//               </Button>
//              </Left>
//             <Right />
    
//   {/* <MySwitch /> */}
//   <Right/>
  
  
//   <Switch 
//   value={this.state.isSwitchOn} 
//   onValueChange={this.onToggleSwitch}

//   />
//              {/* <Button transparent onPress={()=>this.toggleF()}>
//               <Icon
//               type="MaterialIcons"
//               name='brightness-4'
//               color='#ffff'/>
//              </Button> */}
//     {/* <Switch
//     value={true}
//     onValueChange={(val) => console.log(val)}
//     disabled={true}
//     activeText={'On'}
//     inActiveText={'Off'}
//     // circleSize={30}
//     // barHeight={1}
//     //circleBorderWidth={3}
//     backgroundActive={'white'}
//     //backgroundInactive={'gray'}
//    // circleActiveColor={'#30a566'}
//     //circleInActiveColor={'#000000'}
//     changeValueImmediately={true}
//     // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
//     changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
//     innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
//     outerCircleStyle={{}} // style for outer animated circle
//     renderActiveText={false}
//     renderInActiveText={false}
//     switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
//     switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
//     switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
//     switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
//   /> */}
             
           
//           </Header>  
//              </Container>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     header:{
//       backgroundColor: '#89d9c1'//'#0e9aa7'
//     }
//   })
// export default MyHeader;