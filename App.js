import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
            headerTitle: '',
            headerTransparent: false,
          }}
          name="Login"
          getComponent={() => require('./FirebaseApp/Login').default}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            headerTitle: '',
            headerTransparent: false,
          }}
          name="SignUp"
          getComponent={() => require('./FirebaseApp/SignUp').default}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            headerTitle: '',
            headerTransparent: false,
          }}
          name="Home"
          getComponent={() => require('./FirebaseApp/Home').default}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: false,
          }}
          name="PhonePage"
          getComponent={() => require('./FirebaseApp/PhonePage').default}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: false,
          }}
          name="Charts"
          getComponent={() => require('./FirebaseApp/Charts').default}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: false,
          }}
          name="Animation2"
          getComponent={() => require('./practice/Animation2').default}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: false,
          }}
          name="Animation3"
          getComponent={() => require('./practice/Animation3').default}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: false,
          }}
          name="Animation4"
          getComponent={() => require('./practice/Animation4').default}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: false,
          }}
          name="FadeInOutAnimation"
          getComponent={() => require('./practice/FadeInOutAnim').default}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
