import { StyleSheet, Text, Button, View } from 'react-native'
import React, { Component, useState, useEffect } from 'react'

export default function Homescreen({ route, navigation }) {
    /* 2. Get the param */
    const { EmailId, otherParam } = route.params;
    const [EmailIds, setEmailIds] = useState('1234@gmail.com')
    useEffect(() => {
        if (route.params?.EmailId) {
            setEmailIds(EmailId)
            // console.log(EmailId);
            // console.log(EmailIds);
        }
    }, []);
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 40,
            }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '400',
                    fontFamily: 'Comfortaa',
                    color: '#000'
                }}>
                EmailId:{EmailIds}
            </Text>
            <Button title="Logout"
                onPress={() =>
                    navigation.navigate('Onboardingscreen', {
                        status: 'back',
                    })}
            />
        </View>
    )
}

const styles = StyleSheet.create({})