import React, { Component } from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';

// class Login extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//             </View>
//         );
//     }
// }
const Login = () => {
    const [text, setText] = React.useState('');
    const [pass,setPass] =React.useState('');
    return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
     <Text style={styles.text}>Register</Text> 
   </View>
 <View style={styles.input}>
 <TextInput
        label="Username"
        value={text}
        onChangeText={text => setText(text)}
        mode='outlined'
        style={{marginTop:40}}
      />
      <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
        mode='outlined'
        style={{marginTop:40}}
      />
      <TextInput
        label="Password"
        value={pass}
        onChangeText={pass => setPass(pass)}
        mode='outlined'
         style={{marginTop:40}}
         secureTextEntry={true}
        
      />
     </View>
     
  <View style={{alignItems:'center'}}>
     <Button  mode="outlined" onPress={() => console.log('Pressed')} style={{width:200, marginTop:20}} >
    Sign up
  </Button>
      </View>
      </View>
    )
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
    }
})
export default Login;
