import React, { Component,useState} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Dimensions,ScrollView,Image} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import * as firebase from 'firebase';

 function Login({navigation,props}){
  var theme=useTheme();
  return <MyLogin navigation={navigation}  text={theme.colors.text} border={theme.colors.border}/>
}
class MyLogin extends Component{
state={
  email:"",
  password:"",
  errorMessage:null,
  success:null
}
handleLogin=()=>{
  
  const {email,password}=this.state
  firebase.auth().signInWithEmailAndPassword(email,password).then(this.setState({success:'Login done successfully'}) ,this.state.success=='Login done successfully' ? ()=>this.props.navigation.navigate('Home') :null).catch(error=>this.setState({errorMessage:error.message }))
}
render(){

var {text}=this.props;
var {border}=this.props;
    return (
     
    <ScrollView ContentContainerStyle={styles.container}>
      <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
      <View style={{backgroundColor:'#6200ee',height:Dimensions.get('window').height/2.5}}>
          
          <Image source={require('../images/login.gif')} style={{alignSelf:'center', width:Dimensions.get('window').width*0.5, height:100,flex:1, resizeMode:'contain',marginTop:-50}}/>
      </View>
<View style={{backgroundColor:'white',width:Dimensions.get('window').width*0.9,alignSelf:'center',top:-80,elevation:3, shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,borderRadius:10}}>
        <View style={styles.textContainer}>
     <Text  style={{fontSize:30, color:text,letterSpacing:3,marginTop:50}}>WELCOME</Text> 
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
        mode='flat'
        returnKeyType="next"
        onSubmitEditing={() => {password.focus(); }}
        style={{marginTop:7}}
        autoCapitalize="none"
      />
      <TextInput
      //pass => setPass(pass),
        label="Password"
        value={this.state.password}
        onChangeText={password=>this.setState({password})}
        ref={(input) => {password = input; }}
         mode='flat'
         style={{marginTop:40}}
         secureTextEntry={true}
         onSubmitEditing={this.handleLogin}
        
      />
     </View>
   
  
  </View>
  
  </View>
  <Button  mode="contained" onPress={ this.handleLogin} style={{width:200, borderColor:border,alignSelf:'center',top:-105}} >
    Sign in
  </Button>
  <View style={{alignItems:'center',marginTop:-80}}>
    <Text style={{color:text}}>New to Newspark?</Text>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register') } >
    <Text style={{color:'#0cf2b4' ,margin:15,fontWeight:'bold'}}>Sign Up</Text>
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