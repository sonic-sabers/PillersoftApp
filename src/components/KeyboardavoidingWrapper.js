import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { } from 'react-native-gesture-handler'

export default function KeyboardavoidingWrapper({ children, style }) {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={style}>
                    {/* <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '400',
                            fontFamily: 'Poppins-Regular',
                            color: '#000'
                        }}>
                        text
                    </Text> */}
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({})