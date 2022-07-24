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
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from './Homescreen';
import { List } from 'react-native-paper';


const Addmoney = () => {
    return (
        <TouchableOpacity
            style={{
                margin: 15,
                backgroundColor: colors.primary,
                borderRadius: 20,
                padding: 20,
                paddingVertical: 25,
            }}>
            <Hstack centered between>
                <Hstack>
                    <Ionicons
                        name='add-circle-outline'
                        size={20}
                        style={{
                        }}
                        color={colors.white}
                        onPress={() =>
                            alert('_Alert_')
                        }
                    />
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '600',
                            fontFamily: 'Roboto',
                            color: colors.white,
                            marginLeft: 10,
                        }}>
                        Add Money
                    </Text>
                </Hstack>

                <Ionicons
                    name='ellipsis-horizontal'
                    size={20}
                    style={{
                    }}
                    color={colors.white}
                    onPress={() =>
                        alert('_Alert_')
                    }
                />
            </Hstack>
        </TouchableOpacity>
    )
}

const Bondoptions = ({ title }) => {
    return (
        <TouchableOpacity
            style={{
                marginTop: 5,
            }}>
            <Hstack centered>
                <View style={{
                    padding: 3,
                    borderRadius: 50,
                    backgroundColor: colors.lightblack,

                }} />
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '400',
                        fontFamily: 'Roboto',
                        color: colors.primary,
                        marginLeft: 10,
                    }}>
                    {title}
                </Text>
            </Hstack>
        </TouchableOpacity>
    )
}

const Bonditem = ({ title, active }) => {
    const [expanded, setExpanded] = React.useState(active);

    return (
        <View style={{ marginTop: 15, }}>
            <View
                style={{
                    borderRadius: 20,
                    borderWidth: 3,
                    borderColor: colors.lightblack,

                }}>
                <TouchableOpacity
                    onPress={() => setExpanded(!expanded)}
                >
                    <Hstack centered styles={{
                        padding: 15,
                        paddingVertical: 25,

                        borderRadius: 20,
                        marginBottom: -3,
                    }}
                    >
                        <AntDesign
                            name={expanded ? 'caretdown' : 'caretright'}
                            size={13}
                            color={
                                expanded ? colors.primary : colors.lightblack}
                        />
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '700',
                                fontFamily: 'Roboto',
                                color: colors.lightblack,
                                marginLeft: 10,
                            }}>
                            {title}
                        </Text>
                    </Hstack>
                </TouchableOpacity>

                {expanded &&
                    <View style={{
                        padding: 20,
                        borderTopWidth: 3,
                        borderColor: colors.lightblack,
                    }}>
                        <Bondoptions title='Government Of India' />
                        <Bondoptions title='Mahindra ' />
                        <Bondoptions title='TATA ' />


                    </View>}
            </View>

        </View>
    )
}

const Options = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: colors.white4,
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                marginTop: 10,
            }}>
            <Bonditem title='Monthly Bonds' active />
            <Bonditem title='Quarterly Bonds' />
            <Bonditem title='Semi-Annually Bonds ' />
            <Bonditem title='Annually Bonds' />

            <View style={{
                paddingBottom: 90,
            }} />
        </ScrollView>
    )
}

export default function Portfolioscreen() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white
            }}>
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    // backgroundColor: colors.primary
                }}
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,

                    // paddingHorizontal: 10,
                }}>
                <Header title="Portfolio" text='Your' />
                <Addmoney />
                <Options />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})