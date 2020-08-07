import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body,Footer, FooterTab,Text,Content,Icon,Tab, Tabs, ScrollableTab} from 'native-base';
import {ScrollView, StyleSheet,StatusBar, TouchableOpacity, NativeModules,processColor, View,useWindowDimensions} from 'react-native';

class MyHeader extends Component {
   constructor(props){
       super(props)
   }
    render() {
        return (<Container>
            
             </Container>
        );
    }
}
const styles = StyleSheet.create({
    header:{
      backgroundColor: '#89d9c1'//'#0e9aa7'
    }
  })
export default MyHeader;