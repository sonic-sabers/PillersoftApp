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
    Animated,
    TouchableWithoutFeedback,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants';

export default function Onboardingscreen({ route }) {
    const navigation = useNavigation();
    const [animation, setanimation] = useState(new Animated.Value(0))
    useEffect(() => {
        if (!route.params?.status) {
            setTimeout(() => {
                Animated.timing(animation, {
                    toValue: 100,
                    duration: 2000,
                    useNativeDriver: true
                }).start(() => {
                    setanimation(100);
                });
            }, 1000);
        }
    }, []);
    const transformStyle = {
        transform: [{
            translateY: animation,
        }],
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 15 }}>
            <View style={{
                flex: 1, justifyContent: 'center',
                // backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={{
                        width: 130,
                        height: 130,
                        alignSelf: 'center',
                    }} />

                <Animated.View style={[{}, transformStyle]} >
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: '700',
                            fontFamily: 'Comfortaa',
                            textAlign: 'center',
                            alignSelf: 'center',
                            color: colors.mytext,
                            marginTop: 10,
                        }}>
                        Think Different
                    </Text>
                </Animated.View >
            </View>

            {animation == 100
                ?
                <View style={{ height: 128 }}>
                    <TouchableOpacity style={{
                        borderRadius: 20,
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 14,
                        borderColor: colors.primary
                    }}
                        onPress={() => navigation.navigate('Loginscreen')}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '400',
                                fontFamily: 'Comfortaa',
                                color: colors.primary
                            }}>
                            Login In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signupscreen')}
                        style={{
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 14,
                            backgroundColor: colors.primary,
                            marginTop: 10,
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '400',
                                fontFamily: 'Comfortaa',
                                color: colors.white
                            }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={{ height: 128 }} />
            }
        </View >
    )
}

const styles = StyleSheet.create({})