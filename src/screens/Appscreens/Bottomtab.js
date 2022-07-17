import { StyleSheet, Text, Button, BackHandler, Alert, TouchableOpacity, View } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../constants';
import Homescreen from './Homescreen';

function Feed() {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#3bc13a30'
        }}>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Text>Feed!</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ab42ac60'
        }}>
            <Text>Profile!</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#09acb380', justifyContent: 'center', alignItems: 'center'
        }}>
            <Text>Notifications!</Text>
        </View>
    );
}

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
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="file-contract" color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarBadge: 1,
                    // tabBarAccessibilityLabel:'hisdsd sdvsdv',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="shopping-bag" color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile1"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle-outline" color={color} size={20} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Bottomtab({ route }) {
    const { EmailId, otherParam } = route.params;
    const [EmailIds, setEmailIds] = useState('1234@gmail.com')
    useEffect(() => {
        if (route.params?.EmailId) {
            setEmailIds(EmailId);
        }
    }, []);
    return (
        <NavigationContainer independent>
            <MyTabs EmailId={EmailId} />
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({})