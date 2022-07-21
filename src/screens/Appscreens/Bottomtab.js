import { StyleSheet, Text, Button, BackHandler, Alert, TouchableOpacity, View } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../constants';
import { Homescreen, Searchscreen, Profilescreen, Portfolioscreen } from '../';

const Tab = createBottomTabNavigator();


function MyTabs({ EmailId }) {
    // console.log(EmailId);
    return (
        <Tab.Navigator
            initialRouteName="Homescreen"
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
                tabBarShowLabel: false,
                // tabBarActiveBackgroundColor: 'green',
                tabBarHideOnKeyboard: true,

                tabBarStyle: {
                    // backgroundColor: 'green',
                    marginHorizontal: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                    // BlurView:'absolute',
                    position: 'absolute',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                }
                // 
            }}
        // tabBar={(props) => <MyTabBar {...props} />}
        >
            <Tab.Screen
                name="Homescreen"
                component={Homescreen}
                // children={() => }
                // options={{
                //     tabBarLabel: 'Homescreen',
                //     tabBarIcon: ({ color, size }) => (
                //         <MaterialCommunityIcons name="home" color={color} size={20} />
                //     ),

                // }}
                initialParams={{ EmailId3: EmailId }}
                options={({ route, navigation }) => ({
                    title: route.params.userId,
                    tabBarLabel: 'Homescreen',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={20} />
                    ),

                })}
            />
            {/* <Homescreen EmailId1={'1234sdcsd@gmaiecsdcl.com'} /> */}
            {/* </Tab.Screen> */}
            <Tab.Screen
                name="Searchscreen"
                component={Searchscreen}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="file-contract" color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Portfolioscreen"
                component={Portfolioscreen}
                options={{
                    tabBarLabel: 'Portfolioscreen',
                    // tabBarBadge: 1,
                    // tabBarAccessibilityLabel:'hisdsd sdvsdv',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="shopping-bag" color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profilescreen"
                component={Profilescreen}
                options={{
                    tabBarLabel: 'Profilescreen',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle-outline" color={color} size={20} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Bottomtab({ route }) {
    // const { EmailId, otherParam } = route.params;
    const [EmailId, setEmailIds] = useState('1234@gmail.com')
    // useEffect(() => {
    //     if (route.params?.EmailId) {
    //         setEmailIds(EmailId);
    //     }
    // }, []);
    return (
        <NavigationContainer independent>
            <MyTabs EmailId={EmailId} />
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({})