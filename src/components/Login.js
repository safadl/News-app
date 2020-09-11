import React, { Component,useState} from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';

import * as firebase from 'firebase'
class Login extends Component{

state={
  email:"",
  password:"",
  errorMessage:null,
  success:null
}
handleLogin=()=>{
  const {email,password}=this.state
  firebase.auth().signInWithEmailAndPassword(email,password).then(this.setState({success:'Login done successfully'})).catch(error=>this.setState({errorMessage:error.message }))
}
render(){

    return (
    <View style={styles.container}>
      
        <View style={styles.textContainer}>
     <Text style={styles.text}>Welcome back!</Text> 
   </View>
 <View style={styles.input}>
   <View style={styles.errorMessage}>
    {this.state.errorMessage&&<Text style={styles.error}>{this.state.errorMessage}</Text>||<Text style={{color:'green'}}>{this.state.success}</Text>}
   </View>
      <TextInput
      
      autoCapitalize="none"
        label="Email"
        value={this.state.email} // kenet text w change it zeda f password !! ( pass mech text)
        onChangeText={email=>this.setState({email})}
        // , setEmail
        mode='outlined'
        style={{marginTop:40}}
        autoCapitalize="none"
      />
      <TextInput
      //pass => setPass(pass),
        label="Password"
        value={this.state.password}
        onChangeText={password=>this.setState({password})}
        // , {setPassword}
        mode='outlined'
         style={{marginTop:40}}
         secureTextEntry={true}
        
      />
     </View>
     <View style={{alignItems:'center'}}>
     <Button  mode="outlined" onPress={ this.handleLogin} style={{width:200}} >
    Sign in
  </Button>
 
  </View>
  <View style={{alignItems:'center',marginTop:50}}>
    <Text >New to Newspark?</Text>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register') } >
    <Text style={{color:'tomato',margin:15,fontWeight:'bold'}}>Sign Up</Text>
  </TouchableOpacity>
 
  </View>
 
      </View>
      
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
        

    },
    text:{
        fontSize:30
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
export default Login;
