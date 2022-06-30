import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Icon from "react-native-vector-icons/AntDesign"
import LoginApp from "./LoginApp";
import Signup from './Signup';
import BottomNav from './BottomNav';

const Drawer = createDrawerNavigator();
const DrawerApp = () => {
    return (


        <Drawer.Navigator>
            
             <Drawer.Screen name="SectionList" component={BottomNav}
                options={{
                   headerTitle:'Practice App', title: 'Home', headerStatusBarHeight:40,headerTransparent:true,

                    drawerIcon: ({ focused, size }) => (
                        <Icon name='home' size={focused ? 30 : 25}
                            color={focused ? '#3a86ff' : 'grey'} />
                    ),
                }}
            />

            <Drawer.Screen name="Login Page" component={LoginApp}
                options={{
                    title: 'Login Page',headerTitle:'', headerStatusBarHeight:40,headerTransparent:true,

                    drawerIcon: ({ focused, size }) => (
                        <Icon name='user' size={focused ? 30 : 25}
                            color={focused ? '#3a86ff' : 'grey'} />
                    ),
                }}
            />
            <Drawer.Screen name="Sign Up" component={Signup}
                options={{
                    title: 'SignUp Page',headerTitle:'', headerStatusBarHeight:40,headerTransparent:true,
                    drawerIcon: ({ focused, size }) => (
                        <Icon name='adduser' size={focused ? 30 : 25}
                            color={focused ? '#3a86ff' : 'grey'} />
                    ),
                }}
            />


        </Drawer.Navigator>
    );
};
export default DrawerApp;