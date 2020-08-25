// import React, { Component } from 'react';
// import {  FlatList,View,Text,StyleSheet,Dimensions,ScrollView,Image} from 'react-native';
// import {Container,Header,Right,Left,Button,Icon,Body,Title} from 'native-base'
// import {Switch} from 'react-native-paper'
// const numColumns =2;
// import {Surface} from 'react-native-paper'
// const WIDTH = Dimensions.get('window').width
// const dataList= [{key:'General', imageUri:require('../images/international.png')},{key:'Science', imageUri:require('../images/flask.png')},{key:'Business', imageUri:require('../images/supermarket.png')},{key:'Health', imageUri:require('../images/heartbeat.png')},{key:'Sports', imageUri:require('../images/bike.png')},{key:'Technology', imageUri:require('../images/brain.png')},,{key:'Entertainement', imageUri:require('../images/game-controller.png')}]
// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             isSwitchOn:false
//         }   
//     }
//     _renderItem=({item,index})=> {
//       return(
//        <View style={styles.itemStyle}>
          
//            <Text style={[styles.itemText,{color:this.state.isSwitchOn? 'white': 'black'}]}>{item.key}</Text>
//            <Image style={{width:50,height:50}} source={item.imageUri} />
//        </View> 

//       )
//     }
//     onToggleSwitch = () => this.setState({
//         isSwitchOn:!this.state.isSwitchOn
//       });
//     render() {
//         let {container,itemStyle}= styles
//         return (
//             <Container>
//                 <Header androidStatusBarColor={this.state.isSwitchOn? '#000000': '#02b29f'} style={{display:'none'}} iosBarStyle={this.state.isSwitchOn? "light-content" : "dark-content"} style={{backgroundColor:this.state.isSwitchOn? '#000000': 'white'}}  leftComponent={{ icon: 'menu', color: 'white' }}>
             
//             <Left>
            
//               <Button transparent  >
//               <Icon
//               type="Feather"
//               name='menu'
//              style={{ color:this.state.isSwitchOn? '#02b29f': '#b0b0b0' }}  
//               onPress={this.props.navigation.openDrawer}
            
//               />
            
//               </Button>
            
//              </Left>
           
//             <Right />
//             <Body>
//             <Title style={{fontSize:21, color:this.state.isSwitchOn? 'white': 'black'}}>Categories</Title>
//           </Body>
//   {/* <MySwitch /> */}
//   <Right/>
  
  
//   <Switch 
//   value={this.state.isSwitchOn} 
//   onValueChange={this.onToggleSwitch}

//   />
//              {/* <Button transparent onPress={()=>this.toggleF()}>
//               <Icon
//               type="MaterialIcons"
//               name='brightness-4'
//               color='#ffff'/>
//              </Button> */}
//     {/* <Switch
//     value={true}
//     onValueChange={(val) => console.log(val)}
//     disabled={true}
//     activeText={'On'}
//     inActiveText={'Off'}
//     // circleSize={30}
//     // barHeight={1}
//     //circleBorderWidth={3}
//     backgroundActive={'white'}
//     //backgroundInactive={'gray'}
//    // circleActiveColor={'#30a566'}
//     //circleInActiveColor={'#000000'}
//     changeValueImmediately={true}
//     // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
//     changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
//     innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
//     outerCircleStyle={{}} // style for outer animated circle
//     renderActiveText={false}
//     renderInActiveText={false}
//     switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
//     switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
//     switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
//     switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
//   /> */}
             
           
//           </Header>
            
//             <ScrollView style={{backgroundColor:this.state.isSwitchOn? 'black': 'white'}}>

//                 <View style={{justifyContent:'center',alignItems:'center',margin:10}}>
               
//             {/* <Text style={{fontSize:50, color:this.state.isSwitchOn? 'white': 'black'}}>Headlines</Text> */}
//             </View>
//            <FlatList 
//            data={dataList}
//            renderItem={this._renderItem}
//            keyExtractor={(item,index)=>index.toString() }
//            numColumns={numColumns}
//            style={{padding:10}}
//            />
//            </ScrollView>
//            </Container>

//         );
//     }
// }
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
       
//         paddingTop:40,
//         margin:2
//     },
//     surface: {
//         padding: 8,
//         height: 100,
//         width: 100,
//         alignItems: 'center',
//         justifyContent: 'center',
//         elevation: 4,
//         borderRadius:10
//       },
//     itemStyle:{
//     //backgroundColor:'#851621',
//     alignItems:'center',
//     justifyContent:'center',
//     height:100,
//     flex:1,
//     margin:2,
//     height:WIDTH/numColumns,
//     borderRadius:40,
//     borderColor:'black',
//     borderWidth:0.3
//     },
//     itemText:{
//     // color:'#ffff',
//      fontSize:30
//     }
// })
// export default Home;
import * as React from 'react';
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
 Text,
  View,
  StyleSheet,

  SafeAreaView,
  
} from 'react-native';
const { width } = Dimensions.get('screen');
import {
  FlingGestureHandler,
  Directions,
  State,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import Business from '../images/business2.png'
import Health from '../images/health.png'
import Science from '../images/science.png'
import Sports from '../images/sports.png'
import tech from '../images/tech.png'
import enter from '../images/enter.png'
import world from '../images/world.png'
import general from '../images/general.png'
import AllTabs from './AllTabs';
import { ChangePage } from '../redux/actions';
// https://www.creative-flyers.com
const BusinessImageUri= Image.resolveAssetSource(Business).uri
const HealthImageUri= Image.resolveAssetSource(Health).uri
const SienceImageUri= Image.resolveAssetSource(Science).uri
const SportsImageUri= Image.resolveAssetSource(Sports).uri
const techImageUri= Image.resolveAssetSource(tech).uri
const enterImageUri= Image.resolveAssetSource(enter).uri
const worldImageUri= Image.resolveAssetSource(world).uri
const generalImageUri= Image.resolveAssetSource(general).uri
const pressed0=0;
const pressed1=1;
const pressed2=2;
const pressed3=3;
const pressed4=4;
const pressed5=5;
const pressed6=6;
const pressed7=7;
const page=0;
const DATA = [
  {
    title: 'World',
   
    poster:
    worldImageUri,
      //'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
      pressed:pressed0,
      color:'#51bcea'
  },
  {
    title: 'General',
    
    poster:
    generalImageUri
    //  'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
    ,pressed:pressed1,
   
    color:'#c4db6c'
  },
  {
    title: 'Business',
  
    poster:
    BusinessImageUri
    //'https://image.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg'
       //  'https://freeui.design/wp-content/uploads/2018/06/Business-Couple-Illustration-by-Tran-Mau-Tri-Tam-FreeUI.Design-Cover-1200x900.jpg'
      //'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=426&q=80',
      ,pressed:pressed2,
      color:'#c41111'
    },
  {
    title: 'Technology',
    
    poster:
    techImageUri
      //'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
      ,pressed:pressed3,
      color:'#11a6ab'
      },
  {
    title: 'Health',
    
    poster:
    HealthImageUri
     // 'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
     ,pressed:pressed4,
     color:'#5dc3cc'
  },
  {
    title: 'Science',

    poster:
    SienceImageUri
     // 'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
     ,pressed:pressed5,
     color:'#e47070'
  },
  {
    title: 'Sports',
   
    poster:
    SportsImageUri
   // 'https://static.vecteezy.com/system/resources/previews/000/450/931/non_2x/happy-woman-running-in-the-park-vector-illustration-in-flat-style-concept-illustration-for-healthy-lifestyle-sport-exercising.jpg'
     // 'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
     ,pressed:pressed6,
     color:'#b460cc'
  },
  {
    title: 'Entertainement',
   
    poster:
    enterImageUri
    //  'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
    ,pressed:pressed7,
    color:'#e1691f'
  },
];

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.70;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;
const VISIBLE_ITEMS = 3;


const OverflowItems = ({ data, scrollXAnimated }) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });

  return (
    <View style={styles.overflowContainer} >
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text style={[styles.title,{color:item.color} ]} numberOfLines={1}>
                {item.title}
              </Text>
              
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};


 function Home( {navigation,props} ) {
  const [data, setData] = React.useState(DATA);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  //const _goBack = () => console.log('Went back');

  //const _handleSearch = () => console.log('Searching');

  //const _handleMore = () => console.log('Shown more');
  //const [page,setPage] = React.useState(0);
  const setActiveIndex = React.useCallback((activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });

//   whatPage= pagee  = {
//     setState({
//         orderId
//     });
// }



  React.useEffect(() => {
    if (index === data.length - VISIBLE_ITEMS - 1) {
      // get new data
      // fetch more data
      const newData = [...data, ...data];
      setData(newData);
    }
  });

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });
{/* <AllTabs Actpage={page}/> */}
  return (
    
    <FlingGestureHandler
      key='left'
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        key='right'
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}
      >
          

        <SafeAreaView style={styles.container}>
       
        {/* <Appbar.Header style={{backgroundColor:'white', marginLeft:Dimensions.get('window').width*0.18, marginBottom:10,marginTop:10}}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      {/* <Appbar.Content title="CATEGORIES" titleStyle={{fontSize:25,letterSpacing:5,fontWeight:'bold'}}  /> */}
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    {/* </Appbar.Header>   */}
      {/* #89d9c1 */}
     
          
          <StatusBar hidden />
         
          <OverflowItems data={data} scrollXAnimated={scrollXAnimated}  />
          {/* <Button labelStyle={{color:'#02b29f'}}style={{width:200, borderColor:'#02b29f'}}icon="newspaper" mode="outlined" onPress={()=>navigation.navigate('tabs')}>
                  Go to articles
                </Button> */}

        <FlatList
        
            data={data}
            keyExtractor={(_, index) => String(index)}
            horizontal
            onPress={()=>console.log('pressed')}
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: SPACING * 2,
              marginTop: 50,
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,

              ...props
           
            
            }) => {
              const newStyle = [style, { zIndex: data.length - index }];
              return (
                <View style={newStyle} index={index} {...props}>
                                  {/* <Button title='press'onPress={()=>console.log('pressed')}/> */}
                      {/* <TouchableOpacity onPress={()=>console.log('pressed')}> */}
 
                  {children}
                  {/* </TouchableOpacity> */}
                </View>
              );
            }}
            renderItem={({ item, index }) => {

              const p=3;

              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });
              
              return (
                <Animated.View

                  style={{
                    position: 'absolute',
                    left: -ITEM_WIDTH / 2,
                    opacity,
                    Height:200,
                    transform: [
                      {
                        translateX,
                      },
                      { scale },
                    ],
                  }}
                >   
                    {/* <AllTabs isPressed={item.pressed}/> */}
                    <TouchableHighlight style={{ width: ITEM_WIDTH,
                  height: ITEM_HEIGHT, borderRadius: 14, }} onPress={()=> navigation.navigate('tabs')} >
                  <Image
               //   source={require('../images/Business.png')}
                    source={ {uri:item.poster}}
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                      borderRadius: 14,                   
                    }}
                  />
                  </TouchableHighlight>

                </Animated.View>
                
              )
              
            }}
          />
              <View style={{justifyContent:'center',flexDirection:'row',marginBottom:15,color:'red'}}>
            
                </View>
        </SafeAreaView>
        
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 25,
    fontWeight:'800',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontFamily:'DeliusUnicase-Bold',
    //marginLeft:115,
     marginTop:50
  },
//   location: {
//     fontSize: 16,
//   },
//   date: {
//     fontSize: 12,
//   },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 3,
    justifyContent:'center',
    alignItems:'center',
    //flex:1 
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
  },
});
export default Home;
