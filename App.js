import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splashscreen,Homescreen, Onboardingscreen, Loginscreen, Signupscreen } from './src/screens';
import { Provider as PaperProvider } from 'react-native-paper';
import Bottomtab from './src/screens/Appscreens/Bottomtab';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function App() {
  return (
    <PaperProvider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Onboardingscreen" component={Onboardingscreen} />
          <Stack.Screen name="Bottomtab" component={Bottomtab} />
          <Stack.Screen name="Loginscreen" component={Loginscreen} />
          <Stack.Screen name="Signupscreen" component={Signupscreen} />
          <Stack.Screen name="Splashscreen" component={Splashscreen} />
          <Stack.Screen name="Homescreen" component={Homescreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
