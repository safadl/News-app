// import React, {Component} from 'react';
// import {Text, Container, Header,Content, Body, Left,Right} from  'native-base'
// import {View,Title,Button, StyleSheet, Dimensions, WebView, Modal, Share} from 'react-native'
// export default class Contents extends Component{ 
//     constructor(props){
//         super(props);

//     }
//     render(){

//     return(
//    <Modal
//    animationType="slide"
//    transparent
//    visible={}
//    >

//    </Modal>
//         )
//     }
// }

// import React, {Component,useState} from 'react';
// import {View,Button,text} from 'react-native';
// import Modal from 'react-native-modal';
// function Contents() {
//     const [isModalVisible, setModalVisible] = useState(false);
    
//     const toggleModal = () => {
//       setModalVisible(!isModalVisible);
//     };
//     render(){
//       return (
//         <View style={{flex: 1}}>
//           <Button title="Show modal" onPress={toggleModal} />
  
//           <Modal isVisible={isModalVisible}>
//             <View style={{flex: 1}}>
//               <Text>Hello!</Text>
  
//               <Button title="Hide modal" onPress={toggleModal} />
//             </View>
//           </Modal>
//         </View>
//       );
//     }
//   }
  
//   export default Contents;