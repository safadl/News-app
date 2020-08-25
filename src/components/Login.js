// import React, { Component } from 'react';
// import {View, Text,StyleSheet} from 'react-native';
// import { TextInput,Button } from 'react-native-paper';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // class Login extends Component {
// //     render() {
// //         return (
// //             <View style={styles.container}>
// //             </View>
// //         );
// //     }
// // }

// function Login({navigation}){

//   const Stack = createStackNavigator();
//     const [text, setText] = React.useState('');
//     const [pass,setPass] =React.useState('');
//   //   const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [error, setError] = useState();
//   // const {logIn, registerUser} = useAuth();
//   // const [authMode, setAuthMode] = useState('Login');
//     return (
//     <View style={styles.container}>
      
//         <View style={styles.textContainer}>
//      <Text style={styles.text}>Login</Text> 
//      {/* <Text h3>{authMode}</Text> */}
//    </View>
//  <View style={styles.input}>
   
//       <TextInput
      
//       autoCapitalize="none"
//         label="Email"
//         value={text}
//         onChangeText={text => setText(text)}
//         // , setEmail
//         mode='outlined'
//         style={{marginTop:40}}
//       />
//       <TextInput
//         label="Password"
//         value={pass}
//         onChangeText={pass => setPass(pass)}
//         // , {setPassword}
//         mode='outlined'
//          style={{marginTop:40}}
//          secureTextEntry={true}
        
//       />
//      </View>
//      <View style={{alignItems:'center'}}>
//      <Button  mode="outlined" onPress={() => console.log('Pressed')} style={{width:200}} >
//     Sign in
//   </Button>
  
//   </View>
//   <View style={{alignItems:'center'}}>
//      <Button  mode="outlined" onPress={() => console.log('Pressed')} style={{width:200, marginTop:20}} onPress={()=>navigation.navigate('Register')}>
//     Register
//   </Button>
//   {/* <Button
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
//       <ToggleAuthModeComponent setAuthMode={setAuthMode} authMode={authMode} /> */}
//       </View>
//       </View>
//     )
// }
// // const ToggleAuthModeComponent = ({authMode, setAuthMode}) => {
// //   if (authMode === 'Login') {
// //     return (
// //       <Button
// //         title="Haven't created an account yet? Register"
// //         type="outline"
// //         onPress={async () => {
// //           setAuthMode('Register');
// //         }}
// //       />
// //     );
// //   } else {
// //     return (
// //       <Button
// //         title="Have an account already? Login"
// //         type="outline"
// //         onPress={async () => {
// //           setAuthMode('Login');
// //         }}
// //       />
// //     );
// //   }
// // };
// const styles = StyleSheet.create({
    
//     container:{
       
//       //  alignItems:'center',
//         justifyContent:'center',
//         paddingTop:100,
       
//     },
//     textContainer:{
//         alignItems:'center' 
//     },
//     input:{
//         padding:50,
        

//     },
//     text:{
//         fontSize:50
//     }
// })
// export default Login;
import React, {useState} from 'react';
import {Button, Text, Input} from 'react-native-elements';
import {useAuth} from './AuthProvider';

// This view has an input for email and password and logs in the user when the
// login button is pressed.
export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const {logIn, registerUser} = useAuth();

  const [authMode, setAuthMode] = useState('Login');

  return (
    <>
      <Text h3>{authMode}</Text>
      <Input
        autoCapitalize="none"
        placeholder="email"
        onChangeText={setEmail}
      />
      <Input
        secureTextEntry={true}
        placeholder="password"
        onChangeText={setPassword}
      />
      <Button
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
      <ToggleAuthModeComponent setAuthMode={setAuthMode} authMode={authMode} />
    </>
  );
}

const ToggleAuthModeComponent = ({authMode, setAuthMode}) => {
  if (authMode === 'Login') {
    return (
      <Button
        title="Haven't created an account yet? Register"
        type="outline"
        onPress={async () => {
          setAuthMode('Register');
        }}
      />
    );
  } else {
    return (
      <Button
        title="Have an account already? Login"
        type="outline"
        onPress={async () => {
          setAuthMode('Login');
        }}
      />
    );
  }
};