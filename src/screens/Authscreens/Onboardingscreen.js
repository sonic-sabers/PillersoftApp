import React,
{
    useState,
    useEffect,
} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Dimensions,
    Animated,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants'

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 431) / 360);
let imageWidth = dimensions.width;



export default function Onboardingscreen({ route }) {
    const navigation = useNavigation();
    const [animation, setanimation] = useState(new Animated.Value(0))
    useEffect(() => {
        if (!route.params?.status) {
            setTimeout(() => {
                Animated.timing(animation, {
                    toValue: 50,
                    duration: 1000,
                    useNativeDriver: true
                }).start(() => {
                    setanimation(50);
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
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                // 
            }}>
                <ImageBackground
                    style={{
                        height: imageHeight,
                        width: imageWidth,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    source={require('../../assets/images/Obbg.png')}
                >
                    <Image
                        source={require('../../assets/images/Logo2.png')}
                        style={{
                            width: 130,
                            height: 130,
                            alignSelf: 'center',
                        }} />
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '700',
                            fontFamily: 'Roboto',
                            color: colors.white,
                            marginTop: 10,
                        }}>
                        SCALERICH
                    </Text>
                    <Animated.View style={[{}, transformStyle]} >
                        <Text
                            style={styles.minitext}>
                            Bonds  Investment Simple And Easy For Everyone
                        </Text>
                    </Animated.View >
                </ImageBackground>
            </View>

            {animation == 50
                ?
                <View
                    style={{
                        height: 130,
                        paddingHorizontal: 15,
                        marginBottom: 15,
                    }}>
                    <View style={{
                        backgroundColor: colors.primary,
                        borderRadius: 20
                    }}>
                        <TouchableOpacity style={styles.loginbutton}
                            onPress={() => navigation.navigate('Loginscreen')}
                        >
                            <Text
                                style={styles.logintext}>
                                Log In
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        backgroundColor: colors.primary,
                        borderRadius: 20,
                        marginTop: 10,
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signupscreen')}
                            style={styles.registerbutton}>
                            <Text
                                style={styles.registertext}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={{ height: 128 }} />
            }
        </View >
    )
}

const styles = StyleSheet.create({
    minitext: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Roboto',
        textAlign: 'center',
        alignSelf: 'center',
        color: colors.white,
        marginTop: 10,
        maxWidth: '60%',
    },
    registerbutton: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        borderColor: colors.primary,
        backgroundColor: colors.white,
        borderWidth: 2,
    },
    registertext: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Roboto',
        color: colors.primary
    },
    loginbutton: {
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        borderColor: colors.primary,
        backgroundColor: colors.white
    },
    logintext: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Roboto',
        color: colors.primary
    },
})