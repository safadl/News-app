import React, { Component } from 'react';
import { View,Text, TouchableOpacity,FlatList,Image, SafeAreaView,ScrollView } from 'react-native';
import { Paragraph, Avatar, Button, Card, Title } from 'react-native-paper';
const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Article title",
      image:'https://media.wusa9.com/assets/CCT/images/1a89325b-1e8f-4ec7-af67-cc8c75587146/1a89325b-1e8f-4ec7-af67-cc8c75587146_750x422.jpg',
      description:'Several years ago, planetary scientist Lynnae Quick began to wonder whether any of the more than 4,000 known planets beyond our solar system might resemble some of the watery moons around Jupiter and Saturn'
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Article title",
      image:'https://media.wusa9.com/assets/CCT/images/1a89325b-1e8f-4ec7-af67-cc8c75587146/1a89325b-1e8f-4ec7-af67-cc8c75587146_750x422.jpg',
      description:'Several years ago, planetary scientist Lynnae Quick began to wonder whether any of the more than 4,000 known planets beyond our solar system might resemble some of the watery moons around Jupiter and Saturn'
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Article title",
      image:'https://media.wusa9.com/assets/CCT/images/1a89325b-1e8f-4ec7-af67-cc8c75587146/1a89325b-1e8f-4ec7-af67-cc8c75587146_750x422.jpg',
      description:'Several years ago, planetary scientist Lynnae Quick began to wonder whether any of the more than 4,000 known planets beyond our solar system might resemble some of the watery moons around Jupiter and Saturn'
    }, {
      id: "58694a0f-3da1-471f-bd96-145571e29d722",
      title: "Article title",
      image:'https://media.wusa9.com/assets/CCT/images/1a89325b-1e8f-4ec7-af67-cc8c75587146/1a89325b-1e8f-4ec7-af67-cc8c75587146_750x422.jpg',
      description:'Several years ago, planetary scientist Lynnae Quick began to wonder whether any of the more than 4,000 known planets beyond our solar system might resemble some of the watery moons around Jupiter and Saturn'
    }, {
      id: "58694a0f-3da1-471f-bd96-1455711e29d72",
      title: "Article title",
      image:'https://media.wusa9.com/assets/CCT/images/1a89325b-1e8f-4ec7-af67-cc8c75587146/1a89325b-1e8f-4ec7-af67-cc8c75587146_750x422.jpg',
      description:'Several years ago, planetary scientist Lynnae Quick began to wonder whether any of the more than 4,000 known planets beyond our solar system might resemble some of the watery moons around Jupiter and Saturn'
    }, {
      id: "58694a0f-3da1-471f-bd96-7145571e29d72",
      title: "Article title",
      image:'https://media.wusa9.com/assets/CCT/images/1a89325b-1e8f-4ec7-af67-cc8c75587146/1a89325b-1e8f-4ec7-af67-cc8c75587146_750x422.jpg',
      description:'Several years ago, planetary scientist Lynnae Quick began to wonder whether any of the more than 4,000 known planets beyond our solar system might resemble some of the watery moons around Jupiter and Saturn'
    }, {
      id: "58694a0f-3da1-471f-bd696-145571e29d72",
      title: "Article title",
      image:'https://media.wusa9.com/assets/CCT/images/1a89325b-1e8f-4ec7-af67-cc8c75587146/1a89325b-1e8f-4ec7-af67-cc8c75587146_750x422.jpg',
      description:'Several years ago, planetary scientist Lynnae Quick began to wonder whether any of the more than 4,000 known planets beyond our solar system might resemble some of the watery moons around Jupiter and Saturn'
    },
  ];
class SavedScreen extends Component {
    constructor(props){
        super(props)
    
    }
    renderItem({item}){
        return(
            <View style={{flexDirection:'row', paddingBottom:20, paddingTop:10}}>
                
                  <Image style={{width:150,height:150, margin:5, borderRadius:10}} source={{uri:item.image}} />
                  <View style={{flexDirection:'column', padding:5}}><Text  style={{fontSize:20, fontWeight:'bold'}}>{item.title}</Text>
               <Paragraph note style={{marginRight:10}}>{item.description}</Paragraph>
               </View>
            </View>

        )
    }
    render() {

        return (
    
            <SafeAreaView >
          
                  <ScrollView style={{padding:2}}>

               <FlatList
               horizontal={true} 
           showsHorizontalScrollIndicator={false} 
           keyExtractor={(item) => item.id}

          data={DATA}
          renderItem={ ({ item, index }) => (
    
      <View style={{padding:5,marginTop:20}}>
      <Card style={{width:300, borderRadius:30}}>
      <Card.Cover style={{width:300,height:300, borderRadius:8}} source={{ uri: item.image }} />
      <Card.Title title="Is there Planets with Oceans?"  />
      <Card.Content style={{width:200}}>
      <Paragraph >{item.description}</Paragraph>
      <Avatar.Icon icon="heart" color='#6200EE' style={{backgroundColor:'white'}} marginLeft={200}/>  
        </Card.Content>
    
  </Card>
  </View>
    )}
  />
   </ScrollView>
          </SafeAreaView>

        );
    }
}


// import * as React from 'react';
// import {
//   StatusBar,
//   Dimensions,
//   TouchableOpacity,
//   Animated,
//   Text,
//   View,
//   StyleSheet,
// } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign'
// const { width } = Dimensions.get('window');

// const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);

// const DURATION = 1000;
// const TEXT_DURATION = DURATION * 0.8;

// const quotes = [
//   {
//     quote:
//       'For the things we have to learn before we can do them, we learn by doing them.',
//     author: 'Aristotle, The Nicomachean Ethics',
//   },
//   {
//     quote: 'The fastest way to build an app.',
//     author: 'The Expo Team',
//   },
//   {
//     quote:
//       'The greatest glory in living lies not in never falling, but in rising every time we fall.',
//     author: 'Nelson Mandela',
//   },
//   {
//     quote: 'The way to get started is to quit talking and begin doing.',
//     author: 'Walt Disney',
//   },
//   {
//     quote:
//       "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
//     author: 'Steve Jobs',
//   },
//   {
//     quote:
//       'If life were predictable it would cease to be life, and be without flavor.',
//     author: 'Eleanor Roosevelt',
//   },
//   {
//     quote:
//       "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
//     author: 'Oprah Winfrey',
//   },
//   {
//     quote:
//       "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
//     author: 'James Cameron',
//   },
//   {
//     quote: "Life is what happens when you're busy making other plans.",
//     author: 'John Lennon',
//   },
// ];

// const Circle = ({ onPress, index, quotes, animatedValue, animatedValue2 }) => {
//   const { initialBgColor, nextBgColor, bgColor } = colors[index];
//   const inputRange = [0, 0.001, 0.5, 0.501, 1];
//   const backgroundColor = animatedValue2.interpolate({
//     inputRange,
//     outputRange: [
//       initialBgColor,
//       initialBgColor,
//       initialBgColor,
//       bgColor,
//       bgColor,
//     ],
//   });
//   const dotBgColor = animatedValue2.interpolate({
//     inputRange: [0, 0.001, 0.5, 0.501, 0.9, 1],
//     outputRange: [
//       bgColor,
//       bgColor,
//       bgColor,
//       initialBgColor,
//       initialBgColor,
//       nextBgColor,
//     ],
//   });

//   return (
//     <Animated.View
//       style={[
//         StyleSheet.absoluteFillObject,
//         styles.container,
//         { backgroundColor },
//       ]}
//     >
//       <Animated.View
//         style={[
//           styles.circle,
//           {
//             backgroundColor: dotBgColor,
//             transform: [
//               { perspective: 200 },
//               {
//                 rotateY: animatedValue2.interpolate({
//                   inputRange: [0, 0.5, 1],
//                   outputRange: ['0deg', '-90deg', '-180deg'],
//                 }),
//               },

//               {
//                 scale: animatedValue2.interpolate({
//                   inputRange: [0, 0.5, 1],
//                   outputRange: [1, 6, 1],
//                 }),
//               },

//               {
//                 translateX: animatedValue2.interpolate({
//                   inputRange: [0, 0.5, 1],
//                   outputRange: [0, 50/100, 0],
//                 }),
//               },
//             ],
//           },
//         ]}
//       >
//         <TouchableOpacity onPress={onPress}>
//           <Animated.View
//             style={[
//               styles.button,
//               {
//                 transform: [
//                   {
//                     scale: animatedValue.interpolate({
//                       inputRange: [0, 0.05, 0.5, 1],
//                       outputRange: [1, 0, 0, 1],
//                       // extrapolate: "clamp"
//                     }),
//                   },
//                   {
//                     rotateY: animatedValue.interpolate({
//                       inputRange: [0, 0.5, 0.9, 1],
//                       outputRange: ['0deg', '180deg', '180deg', '180deg'],
//                     }),
//                   },
//                 ],
//                 opacity: animatedValue.interpolate({
//                   inputRange: [0, 0.05, 0.9, 1],
//                   outputRange: [1, 0, 0, 1],
//                 }),
//               },
//             ]}
//           >
//             <AnimatedAntDesign name='arrowright' size={28} color={'white'} onPress={()=>console.log('press')}/>
//           </Animated.View>
//         </TouchableOpacity>
//       </Animated.View>
//     </Animated.View>
//   );
// };

// /* 
// initialBgColor -> Big background of the element
// bgColor -> initial circle bg color that will be the next slide initial BG Color
// nextBgColor -> next circle bg color after we fully transition the circle and this will be small again
// prev bgColor === next initialBgColor
// prev nextBgColor === next bgColor
// */

// const colors = [
//   {
//     initialBgColor: 'goldenrod',
//     bgColor: '#222',
//     nextBgColor: '#222',
//   },
//   {
//     initialBgColor: 'goldenrod',
//     bgColor: '#222',
//     nextBgColor: 'yellowgreen',
//   },
//   {
//     initialBgColor: '#222',
//     bgColor: 'yellowgreen',
//     nextBgColor: 'midnightblue',
//   },
//   {
//     initialBgColor: 'yellowgreen',
//     bgColor: 'midnightblue',
//     nextBgColor: 'turquoise',
//   },
//   {
//     initialBgColor: 'midnightblue',
//     bgColor: 'turquoise',
//     nextBgColor: 'goldenrod',
//   },
//   {
//     initialBgColor: 'turquoise',
//     bgColor: 'goldenrod',
//     nextBgColor: '#222',
//   },
// ];

//  function SavedScreen() {
//   const animatedValue = React.useRef(new Animated.Value(0)).current;
//   const animatedValue2 = React.useRef(new Animated.Value(0)).current;
//   const sliderAnimatedValue = React.useRef(new Animated.Value(0)).current;
//   const inputRange = [...Array(quotes.length).keys()];
//   const [index, setIndex] = React.useState(0);

//   const animate = (i) =>
//     Animated.parallel([
//       Animated.timing(sliderAnimatedValue, {
//         toValue: i,
//         duration: TEXT_DURATION,
//         useNativeDriver: true,
//       }),
//       Animated.timing(animatedValue, {
//         toValue: 1,
//         duration: DURATION,
//         useNativeDriver: true,
//       }),
//       Animated.timing(animatedValue2, {
//         toValue: 1,
//         duration: DURATION,
//         useNativeDriver: false,
//       }),
//     ]);

//   const onPress = () => {
//     animatedValue.setValue(0);
//     animatedValue2.setValue(0);
//     animate((index + 1) % colors.length).start();
//     setIndex((index + 1) % colors.length);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 100 }}>
//       <StatusBar hidden />
//       <Circle
//         index={index}
//         onPress={onPress}
//         quotes={quotes}
//         animatedValue={animatedValue}
//         animatedValue2={animatedValue2}
//       />
//       <Animated.View
//         style={{
//           flexDirection: 'row',
//           transform: [
//             {
//               translateX: sliderAnimatedValue.interpolate({
//                 inputRange,
//                 outputRange: quotes.map((_, i) => -i * width * 2),
//               }),
//             },
//           ],
//           opacity: sliderAnimatedValue.interpolate({
//             inputRange: [...Array(quotes.length * 2 + 1).keys()].map(
//               (i) => i / 2
//             ),
//             outputRange: [...Array(quotes.length * 2 + 1).keys()].map((i) =>
//               i % 2 === 0 ? 1 : 0
//             ),
//           }),
//         }}
//       >
//         {quotes.slice(0, colors.length).map(({ quote, author }, i) => {
//           return (
//             <View style={{ paddingRight: width, width: width * 2 }} key={i}>
//               <Text
//                 style={[styles.paragraph, { color: colors[i].nextBgColor }]}
//               >
//                 {quote}
//               </Text>
//               <Text
//                 style={[
//                   styles.paragraph,
//                   {
//                     color: colors[i].nextBgColor,
//                     fontSize: 10,
//                     fontWeight: 'normal',
//                     textAlign: 'right',
//                     opacity: 0.8,
//                   },
//                 ]}
//               >
//                 ______ {author}
//               </Text>
//             </View>
//           );
//         })}
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     paddingTop: 5,
//     padding: 8,
//     paddingBottom: 50,
//   },
//   paragraph: {
//     margin: 12,
//     fontSize: 24,
//     // fontWeight: 'bold',
//     textAlign: 'center',
//     fontFamily: 'Menlo',
//     color: 'white',
//   },
//   button: {
//     height: 100,
//     width: 100,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   circle: {
//     backgroundColor: 'turquoise',
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
// });
export default SavedScreen;
