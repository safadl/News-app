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
            {/* <FlatList
              data={DATA}
              renderItem={this.renderItem} 
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (({ highlighted }) => (
                  <View
                    style={[
                      style.separator,
                      highlighted && { marginLeft: 0, borderWidth:1, borderColor:'black' }
                    ]}
                  />
                ))
              }
            /> */}
                  <ScrollView style={{padding:2}}>

               <FlatList
          horizontal={true} 
           showsHorizontalScrollIndicator={false} 
           keyExtractor={(item) => item.id}

          data={DATA}
          renderItem={ ({ item, index }) => (
      //       <View style={{flexDirection:'row', paddingBottom:20, paddingTop:10, justifyContent:'center'}}>
      // <Image source={{uri:item.image}} // Use item to set the image source
      //   key={index} // Important to set a key for list items
      //   style={{
      //     width:300,
      //     borderRadius:15,
      //     height:300,
      //     borderWidth:2,
      //     alignSelf:'center',
      //     resizeMode:'contain',
      //     margin:8
      //   }}
      // />
      // </View>
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

export default SavedScreen;

// import * as React from 'react';
// import {
//   StatusBar,
//   Text,
//   View,
//   StyleSheet,
//   FlatList,
//   Image,
//   Dimensions,
//   Animated,
//   TouchableOpacity,
//   Platform,
// } from 'react-native';
// const { width, height } = Dimensions.get('window');
// import { LinearGradient } from 'react-native-linear-gradient';
// const DATA = [
//       {
//         id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//         title: "Article title",
//         image:'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png'
//       },
//       {
//         id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//         title: "Article title",
//         image:'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png'
//       },
//       {
//         id: "58694a0f-3da1-471f-bd96-145571e29d72",
//         title: "Article title",
//         image:'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png'
//       },
//     ];
// const SPACING = 10;
// const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
// const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
// const BACKDROP_HEIGHT = height * 0.65;

// const Loading = () => (
//   <View style={styles.loadingContainer}>
//     <Text style={styles.paragraph}>Loading...</Text>
//   </View>
// );

// function Backdrop  ({ data, scrollX }) {
//   return (
//     <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
//       <FlatList
      
//         data={data.reverse()}
//         keyExtractor={(item) => item.id + '-backdrop'}
//         removeClippedSubviews={false}
//         contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
//         renderItem={({ item, index }) => {
          
//           const translateX = scrollX.interpolate({
//             inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
//             outputRange: [0, width],
//             extrapolate:'clamp'
//           });
//           return (
//             <Animated.View
//               removeClippedSubviews={false}
//               style={{
//                 position: 'absolute',
//                 width: translateX,
//                 height,
//                 overflow: 'hidden',
//               }}
//             >
//               <Image
//                 source={{ uri: item.image }}
//                 style={{
//                   width,
//                   height: BACKDROP_HEIGHT,
//                   position: 'absolute',
//                 }}
//               />
//             </Animated.View>
//           );
//         }}
//       />
//       <LinearGradient
//         colors={['rgba(0, 0, 0, 0)', 'white']}
//         style={{
//           height: BACKDROP_HEIGHT,
//           width,
//           position: 'absolute',
//           bottom: 0,
//         }}
//       />
//     </View>
//   );
// };

// export default function SavedScreen() {
//   const [movies, setMovies] = React.useState([]);
//   const scrollX = React.useRef(new Animated.Value(0)).current;
//   // React.useEffect(() => {
//   //   const fetchData = async () => {
//   //     const movies = await getMovies();
//   //     // Add empty items to create fake space
//   //     // [empty_item, ...movies, empty_item]
//   //     setMovies([{ key: 'empty-left' }, ...movies, { key: 'empty-right' }]);
//   //   };

//   //   if (movies.length === 0) {
//   //     fetchData(movies);
//   //   }
//   // }, [movies]);

//   // if (movies.length === 0) {
//   //   return <Loading />;
//   // }

//   return (
//     <View style={styles.container}>
//       <Backdrop data={DATA} scrollX={scrollX} />
//       <StatusBar hidden />
//       <Animated.FlatList
//         showsHorizontalScrollIndicator={false}
//         data={DATA}
//         keyExtractor={(item) => item.id}
//         horizontal
//         bounces={false}
//         decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
//         renderToHardwareTextureAndroid
//         contentContainerStyle={{ alignItems: 'center' }}
//         snapToInterval={ITEM_SIZE}
//         snapToAlignment='start'
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//         renderItem={({ item, index }) => {
//           if (!item.poster) {
//             return <View style={{ width: EMPTY_ITEM_SIZE }} />;
//           }

//           const inputRange = [
//             (index - 2) * ITEM_SIZE,
//             (index - 1) * ITEM_SIZE,
//             index * ITEM_SIZE,
//           ];

//           const translateY = scrollX.interpolate({
//             inputRange,
//             outputRange: [100, 50, 100],
//             extrapolate: 'clamp',
//           });

//           return (
//             <View style={{ width: ITEM_SIZE }}>
//               <Animated.View
//                 style={{
//                   marginHorizontal: SPACING,
//                   padding: SPACING * 2,
//                   alignItems: 'center',
//                   transform: [{ translateY }],
//                   backgroundColor: 'white',
//                   borderRadius: 34,
//                 }}
//               >
//                 <Image
//                   source={{ uri: item.image }}
//                   style={styles.posterImage}
//                 />
//                 <Text style={{ fontSize: 24 }} numberOfLines={1}>
//                   {item.title}
//                 </Text>
//                 <Text style={{ fontSize: 12 }} numberOfLines={3}>
//                   {item.title}
//                 </Text>
//               </Animated.View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   posterImage: {
//     width: '100%',
//     height: ITEM_SIZE * 1.2,
//     resizeMode: 'cover',
//     borderRadius: 24,
//     margin: 0,
//     marginBottom: 10,
//   },
// });