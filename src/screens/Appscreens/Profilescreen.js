import React,
{
    Component,
    useState,
    useEffect,
    useRef
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
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = (props) => {
    return (
        <View style={{
            margin: 5,
            borderBottomWidth: 2,
            borderColor: colors.lightblack,
            paddingBottom: 10,
            marginTop: 10,
            borderRadius: 5,
            paddingHorizontal: 10,
        }}>

            <Hstack centered between>
                <View>

                    <Text
                        style={{
                            fontSize: 27,
                            fontWeight: '700',
                            fontFamily: 'Roboto',
                            color: colors.primary,
                            marginTop: -5,
                        }}>
                        Lorem Ipsum
                    </Text>
                    <Text
                        style={{
                            fontSize: 11,
                            fontWeight: '400',
                            fontFamily: 'Roboto',
                            color: colors.lightblack
                        }}>
                        ID : 060696962
                    </Text>
                </View>
                <Hstack>
                    <Feather
                        name='headphones'
                        size={20}
                        style={{
                            marginRight: 5,
                        }}
                        color={colors.lightblack}
                        onPress={() =>
                            alert('_Alert_')
                        }
                    />

                </Hstack>
            </Hstack>
        </View>
    )
}

const Settingsoption = ({ title }) => {
    return (
        <TouchableOpacity>
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: '500',
                    fontFamily: 'Roboto',
                    color: colors.lightblack,
                    margin: 15,
                    marginTop: 10,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default function Profilescreen() {
    return (
        <ScrollView
            style={{
                backgroundColor: colors.white
            }}>
            <Header />
            <Settingsoption title='Account Preferance' />
            <Settingsoption title='Login  And Security' />
            <Settingsoption title='Payment  Methods' />
            <Settingsoption title='Help And Support' />
            <Settingsoption title='My  Rewards ' />
            <Settingsoption title='Settings ' />
            <Settingsoption title='Appearance ' />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})