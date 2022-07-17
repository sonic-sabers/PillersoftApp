import { StyleSheet, Text, Button, BackHandler, Alert, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../constants';
import { Actions } from 'react-native-router-flux'

function Feed() {
    const navigation = useNavigation();
    // const backActions = () => {
    //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //         {
    //             text: "Back to onboardingscreen",
    //             onPress: () => navigation.goBack()
    //         },
    //         {
    //             text: "Cancel",
    //             onPress: () => null,
    //             style: "cancel"
    //         },
    //         { text: "YES", onPress: () => BackHandler.exitApp() },


    //     ]);
    //     return true;
    // };
    // const backHandler = BackHandler.addEventListener(
    //     "hardwareBackPress",
    //     backActions
    // );
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#3bc13a30'
            // marginBottom: -30,
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



function MyTabs() {

    return (
        <Tab.Navigator
            initialRouteName="Feed"
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
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={20} />
                    ),
                }}
            />
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

export default function Bottomtab() {
    return (
        <NavigationContainer independent>
            <MyTabs />
        </NavigationContainer>
    );
}


// export default function Bottomtab() {
//   return (
//     <View>
//       <Text>Bottomtab</Text>
//     </View>
//   )
// }

const styles = StyleSheet.create({})