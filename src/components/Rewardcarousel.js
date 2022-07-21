import React, { Component, useState, useEffect, useRef } from 'react';
import { StyleSheet, Button, Image, Text, TouchableOpacity, View, TextInput, ScrollView, KeyboardAvoidingView, SafeAreaView, ImageBackground, FlatList, ViewPropTypes, Switch, Dimensions, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { colors } from '../constants';


// export default function Rewardcarousel() {
//     return (
//         <View>
//             <Text>Rewardcarousel</Text>
//             <Text
//                 style={{
//                     fontSize: 20,
//                     fontWeight: '400',
//                     fontFamily: 'Roboto',
//                     color: '#000'
//                 }}>
//                 text
//             </Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({})




export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const images = [
    {
        id: 1,
        image: require('../assets/images/Banner.png'),
        header: 'Better way to learning  \n is calling you!',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
    {
        id: 2,
        image: require('../assets/images/Banner.png'),
        header: 'Find yourself  by doing  \n whatever you do !',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
    {
        id: 3,
        image: require('../assets/images/Banner.png'),
        header: 'It’s not just learning, \n It’s a promise!',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
    {
        id: 4,
        image: require('../assets/images/Banner.png'),
        header: 'It’s not just learning, \n It’s a promise!',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
    {
        id: 5,
        image: require('../assets/images/Banner.png'),
        header: 'It’s not just learning, \n It’s a promise!',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
    {
        id: 6,
        image: require('../assets/images/Banner.png'),
        header: 'It’s not just learning, \n It’s a promise!',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
];

const Offercomponent = ({ source }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            //  key={source.item.id}
            onPress={() => navigation.navigate('Coursename')}
            // onPress={() => navigation.navigate('Offersscreen')}
            // onPress={() => console.log(source)}
            style={{
                // borderWidth: 1,
                // padding: 20,
                // borderRadius: 20, 
                alignItems: 'center',
                // backgroundColor: 'white',
                textAlign: 'center',
                textAlignVertical: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                // elevation: 2,
            }}>
            {/* <Text
        style={{
          fontSize: 20,
          fontWeight: '400',
          fontFamily: 'Inter',
          color: '#000'
        }}>
        text
      </Text> */}
            <Image
                source={source.image}
                style={{
                    width: SLIDER_WIDTH-15,
                    height: 120,
                    paddingBottom: -40,
                    borderRadius: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    // elevation: 2,
                }}
            />
        </TouchableOpacity>
    )
}

const RenderItem = (props) => {
    // const navigation = useNavigation();
    return (
        <>
            <Offercomponent
                source={props.item}
            />
            {/* <TouchableOpacity key={props.item.id}
        onPress={() => console.log(props.item)}
        style={{
          // borderWidth: 1,
          // padding: 20,
          // borderRadius: 20, 
          alignItems: 'center',
          // backgroundColor: 'white',
          textAlign: 'center',
          textAlignVertical: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          // elevation: 2,
        }}>
        <Image
          source={props.item.image}
          style={{
            width: '95%',
            height: 120,
            paddingBottom: -40,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            // elevation: 2,
          }}
        />
      </TouchableOpacity> */}
        </>
    );
};

const Rewardcarousel = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    return (
        <View style={{
            marginTop: 10,
            // marginHorizontal: -10,
            paddingLeft: 10,
            paddingHorizontal: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,
            elevation: 16,
        }} >
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: '400',
                    fontFamily: 'Roboto',
                    color: colors.lightblack,
                    // marginLeft: 10,
                    marginBottom: 5,
                }}>
                Rewards
            </Text>
            <Carousel
                ref={isCarousel}
                data={images}
                renderItem={RenderItem}
                sliderWidth={SLIDER_WIDTH - 20}
                itemWidth={SLIDER_WIDTH - 20}
                onSnapToItem={index => setIndex(index)}
                autoplayInterval={3500}
                autoplay
                enableMomentum={false}
                loop
                style={{
                    marginBottom: -20,
                    marginTop: 10
                }}
            />
            <Pagination
                dotsLength={images.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotContainerStyle={{
                    marginTop: -25,
                }}
                dotStyle={{
                    width: 5,
                    height: 5,
                    borderRadius: 10,
                    backgroundColor: colors.white,
                    borderColor: colors.primary,
                    borderWidth: 4,
                    marginHorizontal: -15,
                    marginLeft: -20,
                }}
                tappableDots={true}
                inactiveDotStyle={{
                    backgroundColor: 'black',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
};

export default Rewardcarousel;
