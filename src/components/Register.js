import React, { Component,useState } from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import * as firebase from 'firebase'

// class Login extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//             </View>
//         );
//     }
// }
class Register extends Component{
    // const [email, setEmail] = React.useState('');
    // const [password,setPassword] =React.useState('');
    // const [username,setUsername] =React.useState('');
    // const [errorMessage,setErrorMessage]=useState("")
state={
  email:"",
  password:"",
  ursername:"",
  errorMessage:null
}
handleSignUp=()=>{
  firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(
    userCredentials=>{
      
      return userCredentials.user.updateProfile({
        displayName:this.state.username
      })
    }
  ).catch(error=>this.setState({errorMessage:error.message}))
  console.log("ERROR MESSAGE",this.state.errorMessage)
    }
  
render(){

 return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
     <Text style={styles.text}>Register</Text> 
   </View>
 <View style={styles.input}>
 <View style={styles.errorMessage}>
 {this.state.errorMessage&&<Text style={styles.error}>{this.state.errorMessage}</Text>}
   </View>
 <TextInput
        label="Username"
        value={this.state.username}
        onChangeText={username => this.setState({username})}
        mode='outlined'
        style={{marginTop:40}}
      />
      <TextInput
        label="Email"
        value={this.state.email}
        onChangeText={email => this.setState({email})}
        mode='outlined'
        style={{marginTop:40}}
      />
      <TextInput
        label="Password"
        value={this.state.password}
        onChangeText={password=> this.setState({password})}
        mode='outlined'
         style={{marginTop:40}}
         secureTextEntry={true}
        
      />
     </View>
     
  <View style={{alignItems:'center'}}>
     <Button  mode="outlined" onPress={this.handleSignUp} style={{width:200, marginTop:20}} >
    Sign up
  </Button>
  
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
        fontSize:50
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
