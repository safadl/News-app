
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
// https://www.creative-flyers.com
const BusinessImageUri= Image.resolveAssetSource(Business).uri
const HealthImageUri= Image.resolveAssetSource(Health).uri
const SienceImageUri= Image.resolveAssetSource(Science).uri
const SportsImageUri= Image.resolveAssetSource(Sports).uri
const techImageUri= Image.resolveAssetSource(tech).uri
const enterImageUri= Image.resolveAssetSource(enter).uri
const worldImageUri= Image.resolveAssetSource(world).uri
const generalImageUri= Image.resolveAssetSource(general).uri

const DATA = [
  {
    title: 'World',
   
    poster:
    worldImageUri,
      //'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
      color:'#51bcea'
  },
  {
    title: 'General',
    
    poster:
    generalImageUri,
    //  'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
   
    color:'#c4db6c'
  },
  {
    title: 'Business',
  
    poster:
    BusinessImageUri
    //'https://image.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg'
       //  'https://freeui.design/wp-content/uploads/2018/06/Business-Couple-Illustration-by-Tran-Mau-Tri-Tam-FreeUI.Design-Cover-1200x900.jpg'
      //'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=426&q=80',
      ,
      color:'#c41111'
    },
  {
    title: 'Technology',
    
    poster:
    techImageUri
      //'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
      ,
      color:'#11a6ab'
      },
  {
    title: 'Health',
    
    poster:
    HealthImageUri
     // 'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
     ,
     color:'#5dc3cc'
  },
  {
    title: 'Science',

    poster:
    SienceImageUri
     // 'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
     ,
     color:'#e47070'
  },
  {
    title: 'Sports',
   
    poster:
    SportsImageUri
   // 'https://static.vecteezy.com/system/resources/previews/000/450/931/non_2x/happy-woman-running-in-the-park-vector-illustration-in-flat-style-concept-illustration-for-healthy-lifestyle-sport-exercising.jpg'
     // 'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
     ,
     color:'#b460cc'
  },
  {
    title: 'Entertainement',
   
    poster:
    enterImageUri
    //  'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
    ,
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

  const setActiveIndex = React.useCallback((activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });




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
   
     
          
          <StatusBar hidden />
         
          <OverflowItems data={data} scrollXAnimated={scrollXAnimated}  />


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
          
 
                  {children}
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
                    <TouchableHighlight style={{ width: ITEM_WIDTH,
                  height: ITEM_HEIGHT, borderRadius: 14, }} onPress={()=> navigation.navigate('tabs')} >
                  <Image
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
