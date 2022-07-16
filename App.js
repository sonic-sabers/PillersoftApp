//npm i @react-native-community/masked-view  @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated@2.2.4 react-native-safe-area-context react-native-screens @react-navigation/native

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { Splashscreen, Onboardingscreen, Loginscreen, Signupscreen } from './src/screens';
import { Provider as PaperProvider } from 'react-native-paper';
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to ProfileScreen"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    <PaperProvider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Onboardingscreen" component={Onboardingscreen} />
          <Stack.Screen name="Loginscreen" component={Loginscreen} />
          <Stack.Screen name="Signupscreen" component={Signupscreen} />
          <Stack.Screen name="Splashscreen" component={Splashscreen} />
          {/* <Stack.Screen name="Onboardingscreen" component={Onboardingscreen} /> */}
          {/* <Stack.Screen name="Onboardingscreen" component={Onboardingscreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
