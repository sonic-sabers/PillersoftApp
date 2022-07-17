import { StyleSheet, Text, Button, View } from 'react-native'
import React, { Component, useState, useEffect } from 'react'

export default function Homescreen({ route, navigation, EmailId3 }) {
    /* 2. Get the param */
    const { EmailId, otherParam } = route.params;
    const [EmailIds, setEmailIds] = useState('1234@gmail.com')
    useEffect(() => {
        if (route.params?.EmailId3) {
            setEmailIds(route.params.EmailId3)
        }
        // setEmailIds(EmailId3)
        // console.log(EmailId)
        // console.log(EmailId3)
        // console.log(route.params)
    }, []);
    // console.log('1',EmailId3)
    // console.log('2',EmailId)
    // console.log('3',route.params)
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
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}

const styles = StyleSheet.create({})