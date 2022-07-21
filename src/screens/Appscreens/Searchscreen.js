import React,
{
  Component,
  useState,
  useEffect,
  useRef,
  cloneElement
} from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  ImageBackground,
  FlatList,
  ViewPropTypes,
  Switch,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Searchcomponent = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10,
        borderRadius: 10,
        margin: 5,
        height: 100,
        marginHorizontal: 15,
      }}
    >
      <Text style={{}}>
        Bonds Here
      </Text>
    </View>
  )
}

const Searchbutton = () => {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={{
      margin: 12,
    }}>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',

        borderWidth: 1.5,
        paddingHorizontal: 10,
        borderRadius: 25,
        borderColor: colors.primary,
        height: 45,
      }}>
        <TextInput
          style={{
            flex: 1,
            fontWeight: '400',
            fontSize: 15,
            color: '#999',
          }}
          autoCapitalize="none"
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor={colors.lightblack}
          placeholder='Search'

        />
        <AntDesign name='search1' size={22} color={colors.lightblack} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 10,

        }}>
        <TouchableOpacity>
          <Hstack centered>
            <AntDesign name='filter' size={15} color={colors.lightblack} />
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                fontFamily: 'Roboto',
                marginLeft: 5,
                color: colors.lightblack
              }}>
              Filter
            </Text>
          </Hstack>
        </TouchableOpacity>
        <TouchableOpacity>
          <Hstack centered>
            <FontAwesome
              name='sort-amount-desc' size={15} color={colors.lightblack} />
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                fontFamily: 'Roboto',
                color: colors.lightblack,
                marginLeft: 5,
              }}>
              Sort
            </Text>
          </Hstack>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function Searchscreen() {
  return (
    <ScrollView
      style={{
        paddingTop: 10,
        backgroundColor: colors.white
      }}>
      <Searchbutton />

      {Array.from(Array(10).keys()).map((i) => (
        <View
          key={i}
        >
          <Searchcomponent />
        </View>
      ))}

      <View style={{ paddingBottom: 80 }} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  input: {

  },
})