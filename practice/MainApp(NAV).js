import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './practice/BottomNav';
import Login from './Screen/login';
import { Provider } from 'react-redux';
import { Store } from './Redux/store';


const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <Provider store={Store}>

      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen options={{ headerShown: false, headerTitle: "", headerTransparent: false }} name='Drawer' getComponent={() => require('./practice/Drawer').default} />
          <Stack.Screen options={{ headerShown: false }} name="LoginApp" getComponent={() => require('./practice/LoginApp').default} />
          <Stack.Screen options={{ headerShown: false, headerTitle: "", headerTransparent: false }} name="SectionList" getComponent={() => require('./practice/SectionList').default} />
          <Stack.Screen options={{ headerTitle: "", headerTransparent: true }} name="Signup" getComponent={() => require('./practice/Signup').default} />
          <Stack.Screen name='Pagination' getComponent={() => require('./practice/Pagination')} />
          <Stack.Screen name='FadeInOutAnim' getComponent={() => require('./practice/FadeInOutAnim')} />
          <Stack.Screen options={{ headerShown: false, headerTitle: "", headerTransparent: false }} name='BottomNav' component={BottomNav} />
          <Stack.Screen name='Login' getComponent={() => require('./Screen/login')} />
          <Stack.Screen name='ImagesPage' getComponent={() => require('./practice/ImagesPage')} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};
export default App;