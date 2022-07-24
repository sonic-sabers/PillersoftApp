import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Homescreen, Onboardingscreen, Loginscreen, Signupscreen } from './src/screens';
import Bottomtab from './src/screens/Appscreens/Bottomtab';
import { Provider as PaperProvider } from 'react-native-paper';
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function App() {
  return (
    <PaperProvider >
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Onboardingscreen" component={Onboardingscreen} />
          <Stack.Screen name="Bottomtab" component={Bottomtab} />
          <Stack.Screen name="Loginscreen" component={Loginscreen} />
          <Stack.Screen name="Signupscreen" component={Signupscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
