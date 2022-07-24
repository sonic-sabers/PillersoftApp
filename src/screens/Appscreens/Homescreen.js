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
    Modal,
    Pressable,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Notificationitem = () => {
    return (
        <View style={{
            borderRadius: 40,
            backgroundColor: colors.lightblack,
            height: 5,
            width: 5,
            padding: 4,
            marginVertical: 20,
        }} />
    )
}

export const Header = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <View style={{
                        flex: 1,
                        padding: 10,
                        paddingLeft: 15
                    }}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{
                                backgroundColor: colors.primary,
                                height: 36,
                                width: 36,
                                borderRadius: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Octicons name='arrow-left'
                                size={27} color={colors.white} />
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 27,
                                fontWeight: '700',
                                fontFamily: 'Roboto',
                                color: colors.prlightblackimary,
                                marginTop: 5,
                            }}>
                            Notifications


                        </Text>
                        <View style={{
                            marginVertical: 5,
                            borderBottomWidth: 2,
                            borderColor: colors.lightblack,
                            paddingBottom: 5,
                            // marginTop: 10,
                            borderRadius: 5,
                            // paddingHorizontal: 10,
                        }} />
                        <View>
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{
                margin: 5,
                borderBottomWidth: 2,
                borderColor: colors.lightblack,
                paddingBottom: 10,
                marginTop: 10,
                borderRadius: 5,
                paddingHorizontal: 10,
            }}>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '600',
                        fontFamily: 'Roboto',
                        color: colors.lightblack
                    }}>
                    {props.text ? props.text : 'Hi,Welcome'}
                </Text>
                <Hstack centered between>
                    <Text
                        style={{
                            fontSize: 27,
                            fontWeight: '700',
                            fontFamily: 'Roboto',
                            color: colors.primary,
                            marginTop: -5,
                        }}>
                        {props.title ? props.title : 'Lorem Ipsum'}
                    </Text>
                    <Hstack>
                        <TouchableOpacity
                            onPress={() =>
                                setModalVisible(true)
                            }
                        >
                           <MaterialIcons
                                name='notifications-none'
                                size={25}
                                style={{
                                    marginRight: 5,
                                }}
                                color={colors.lightblack}

                            />
                        </TouchableOpacity>

                    </Hstack>
                </Hstack>
            </View>
        </>
    )
}
export const Headertext = ({ title }) => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: '400',
                    fontFamily: 'Roboto',
                    color: colors.lightblack,

                }}>
                {title ? title : 'New Listing'}
            </Text>
        </View>
    )
}

export const Watchlist = () => {
    return (
        <View
            style={{
                marginTop: -30,
                paddingHorizontal: 10,
            }}
        >
            <Headertext />
            <View style={{

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

            }}>
                {Array.from(Array(10).keys()).map((i) => (
                    <View
                        key={i}
                        style={{ padding: 15, justifyContent: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '400',
                                fontFamily: 'Roboto',
                                color: '#000'
                            }}>
                            Item {i + 1}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default function Homescreen({ route, navigation, EmailId3 }) {
    // const { EmailId, otherParam } = route.params;
    const [EmailIds, setEmailIds] = useState('1234@gmail.com')
    // useEffect(() => {
    //     if (route.params?.EmailId3) {
    //         setEmailIds(route.params.EmailId3)
    //     }
    // }, []);
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white
            }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,

                    // paddingHorizontal: 10,
                }}>

                <Header />
                <Rewardcarousel />
                <Watchlist />
                <View style={{ paddingBottom: 60 }} />
            </ScrollView>
            {/* <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})