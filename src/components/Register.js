import React, { Component,useState } from 'react';
import {View, Text,StyleSheet,TouchableOpacity,ScrollView,Dimensions,Image} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import * as firebase from 'firebase'
import {useTheme} from '@react-navigation/native';

function Register({navigation,props}){
  var theme=useTheme();
  return <MyRegister navigation={navigation}  text={theme.colors.text} border={theme.colors.border}/>
}
class MyRegister extends Component{
  
state={
  email:"",
  password:"",
  ursername:"",
  errorMessage:null,
  success:null
}
handleSignUp=()=>{
  firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(
    this.setState({success:'Registration done successfully'}),
        userCredentials=>{
      
      return userCredentials.user.updateProfile({
        displayName:this.state.username
      })
    }
  ).catch(error=>this.setState({errorMessage:error.message}))
  console.log("ERROR MESSAGE",this.state.errorMessage)
    }
  
render(){
  var {text}=this.props;
  var {border}=this.props;
 return (

  <ScrollView ContentContainerStyle={styles.container}>
  <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
  <View style={{backgroundColor:'#6200ee',height:Dimensions.get('window').height/2.5}}>
      
      <Image source={require('../images/register.gif')} style={{alignSelf:'center', width:Dimensions.get('window').width*0.5, height:100,flex:1, resizeMode:'contain',marginTop:-50}}/>
  </View>
<View style={{backgroundColor:'white',width:Dimensions.get('window').width*0.9,alignSelf:'center',top:-80,elevation:3, shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,borderRadius:10}}>
    <View style={styles.textContainer}>
    <Text  style={{fontSize:30, color:text,letterSpacing:3,marginTop:50}}>JOIN US</Text> 
   </View>
 <View style={styles.input}>
 <View style={styles.errorMessage}>
 {this.state.errorMessage&&<Text style={styles.error}>{this.state.errorMessage}</Text>||<Text style={{color:'green'}}>{this.state.success}</Text>}
   </View>
 <TextInput
        label="Username"
        value={this.state.username}
        onChangeText={username => this.setState({username})}
        mode='flat'
        style={{marginTop:40}}
      />
      <TextInput
        label="Email"
        value={this.state.email}
        onChangeText={email => this.setState({email})}
        mode='flat'
        style={{marginTop:40}}
      />
      <TextInput
        label="Password"
        value={this.state.password}
        onChangeText={password=> this.setState({password})}
        mode='flat'
         style={{marginTop:40}}
         secureTextEntry={true}
        
      />
     </View>
     </View>

   </View>
      <Button  mode="contained" onPress={ this.handleLogin} style={{width:200, borderColor:border,alignSelf:'center',top:-100}} >
    Sign up
  </Button>
  <View style={{alignItems:'center',marginTop:-80}}>

  <Text style={{marginTop:15,color:text}}>Already have an account? </Text>
  <TouchableOpacity onPress={()=>this.props.navigation.goBack() } >
    <Text style={{color:'#0cf2b4',margin:15,fontWeight:'bold'}}>Login</Text>
  </TouchableOpacity>
  </View>

      </ScrollView>
      
    )
}
}
const styles = StyleSheet.create({
    
    container:{
       
      //  alignItems:'center',
        justifyContent:'center',
        paddingTop:100,
       
    },
    textContainer:{
        alignItems:'center' 
    },
    input:{
        padding:50,
        marginTop:-35
        

    },
   
    error:{
      color:'#E9446A',
      fontSize:13,
      fontWeight:"600",
      textAlign:'center'
    },
    errorMessage:{
      fontSize:30,
      color:'red',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center'
    }
})
export default Register;
