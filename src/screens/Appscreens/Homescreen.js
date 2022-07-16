import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Homescreen() {
    const [name, setname] = useState(second)
    React.useEffect(() => {
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
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 40,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Welcome {userDetails?.fullname}
            </Text>
            <Button title="Logout" onPress={logout} />
        </View>
    )
}

const styles = StyleSheet.create({})