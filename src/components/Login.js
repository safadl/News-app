import React, { Component,useState} from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'
//import { TouchableOpacity } from 'react-native-gesture-handler';
class Login extends Component{

//   const Stack = createStackNavigator();

//     const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
// const [errorMessage,setErrorMessage]=useState("")
state={
  email:"",
  password:"",
  errorMessage:null
}
handleLogin=()=>{
  const {email,password}=this.state
  firebase.auth().signInWithEmailAndPassword(email,password).catch(error=>this.setState({errorMessage:error.message }))
}
render(){

  // const [error, setError] = useState();
  // const {logIn, registerUser} = useAuth();
  // const [authMode, setAuthMode] = useState('Login');
    return (
    <View style={styles.container}>
      
        <View style={styles.textContainer}>
     <Text style={styles.text}>Login</Text> 
   </View>
 <View style={styles.input}>
   <View style={styles.errorMessage}>
    {this.state.errorMessage&&<Text style={styles.error}>{this.state.errorMessage}</Text>}
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
     <Button  mode="outlined" onPress={this.handleLogin} style={{width:200}} >
    Sign in
  </Button>
 /
  </View>
  {/* <View style={{alignItems:'center'}}>
     <Button  mode="outlined" onPress={() => console.log('Pressed')} style={{width:200, marginTop:20}} onPress={()=>navigation.navigate('Register')}>
    Register
  </Button> */}
  {/* <Button
        onPress={async () => {
          console.log(`${authMode} button pressed with email ${email}`);
          setError(null);
          try {
            if (authMode === 'Login') {
              await logIn(email, password);
            } else {
              await registerUser(email, password);
              setAuthMode('Login');
            }
          } catch (e) {
            setError(`Operation failed: ${e.message}`);
          }
        }}
        title={authMode}
      />
      <Text>{error}</Text>
      <ToggleAuthModeComponent setAuthMode={setAuthMode} authMode={authMode} /> */}
      </View>
      
    )
}
}
// const ToggleAuthModeComponent = ({authMode, setAuthMode}) => {
//   if (authMode === 'Login') {
//     return (
//       <Button
//         title="Haven't created an account yet? Register"
//         type="outline"
//         onPress={async () => {
//           setAuthMode('Register');
//         }}
//       />
//     );
//   } else {
//     return (
//       <Button
//         title="Have an account already? Login"
//         type="outline"
//         onPress={async () => {
//           setAuthMode('Login');
//         }}
//       />
//     );
//   }
// };
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
export default Login;
// import React, {useState} from 'react';
// import {Button, Text, Input} from 'react-native-elements';
// import {useAuth} from './AuthProvider';

// // This view has an input for email and password and logs in the user when the
// // login button is pressed.
// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState();

//   const {logIn, registerUser} = useAuth();

//   const [authMode, setAuthMode] = useState('Login');

//   return (
//     <>
//       <Text h3>{authMode}</Text>
//       <Input
//         autoCapitalize="none"
//         placeholder="email"
//         onChangeText={setEmail}
//       />
//       <Input
//         secureTextEntry={true}
//         placeholder="password"
//         onChangeText={setPassword}
//       />
//       <Button
//         onPress={async () => {
//           console.log(`${authMode} button pressed with email ${email}`);
//           setError(null);
//           try {
//             if (authMode === 'Login') {

//               await logIn(email, password);

//             } else {

//               await registerUser(email, password);

//               setAuthMode('Login');
//             }
//           } catch (e) {
//             setError(`Operation failed: ${e.message}`);
//           }
//         }}
//         title={authMode}
//       />
//       <Text>{error}</Text>
//       <ToggleAuthModeComponent setAuthMode={setAuthMode} authMode={authMode} />
//     </>
//   );
// }

// const ToggleAuthModeComponent = ({authMode, setAuthMode}) => {
//   if (authMode === 'Login') {
//     return (
//       <Button
//         title="Haven't created an account yet? Register"
//         type="outline"
//         onPress={async () => {
//           setAuthMode('Register');
//         }}
//       />
//     );
//   } else {
//     return (
//       <Button
//         title="Have an account already? Login"
//         type="outline"
//         onPress={async () => {
//           setAuthMode('Login');
//         }}
//       />
//     );
//   }
// };