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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
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

const Settingsoption = ({ title, icon, type }) => {
    return (
        <TouchableOpacity
            style={{
                marginTop: 15,
                marginLeft: 14,
            }}>
            <Hstack centered>
                {type == 'material' && <MaterialCommunityIcons name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}
                {type == 'Octicons' && <Octicons name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}
                {type == 'Ionicons' && <Ionicons name={icon ? icon : 'account-circle-outline'} size={18} color={colors.primary} />}
                {type == 'FontAwesome' && <FontAwesome name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}
                {type == 'FontAwesome5' && <FontAwesome5 name={icon ? icon : 'account-circle-outline'} size={18} color={colors.primary} />}
                {type == 'Feather' && <Feather name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}
                {type == 'Foundation' && <Foundation name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}
                {type == 'MaterialIcons' && <MaterialIcons name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '600',
                        fontFamily: 'Roboto',
                        color: colors.lightblack,
                        marginLeft: 8,

                    }}>
                    {title}
                </Text>
            </Hstack>
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
            {/* <Settingsoption title='Account Preferance' />
            <Settingsoption title='Login  And Security' />
            <Settingsoption title='Payment  Methods' />
            <Settingsoption title='Help And Support' />
            <Settingsoption title='My Rewards ' />
            <Settingsoption title='Settings ' /> */}
            <Settingsoption title='Account Settings' type='material' icon='account-circle-outline' />
            <Settingsoption title='All Orders' type='Ionicons' icon='newspaper-outline' />
            <Settingsoption title='Rewards ' type='FontAwesome5' icon='medal' />
            <Settingsoption title='Security ' type='Foundation' icon='shield' />
            <Settingsoption title='Invite And Earn ' type='Ionicons' icon='ios-cash-outline' />
            <Settingsoption title='Help And Support ' type='Feather' icon='help-circle' />
            <Settingsoption title='Contact Us On Social ' type='Ionicons' icon='globe-outline' />
            <Settingsoption title='About Us ' type='MaterialIcons' icon='help-center' />
            <Settingsoption title='App Feedback ' type='FontAwesome' icon='braille' />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})