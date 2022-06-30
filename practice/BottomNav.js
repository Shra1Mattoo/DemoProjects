import React from 'react';
import Icon from "react-native-vector-icons/Fontisto"
import Icon2 from "react-native-vector-icons/Entypo"
import Icon3 from "react-native-vector-icons/Foundation"
import Icon4 from 'react-native-vector-icons/Feather'
import Icon5 from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import sectionList from './SectionList';
import flat1 from "./FlatList"
import Pagination from './Pagination';
import Animation from './Animation';
import FadeInOutAnim from './FadeInOutAnim'
import Login from '../Screen/login'
import ImagesPage from './ImagesPage'
import home from '../Redux-SAGA/home';



const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }} >

            <Tab.Screen name="Home" component={sectionList}
                options={{
                    title: 'Section-List',
                    tabBarIcon: ({ focused, size }) => (
                        <Icon5 name='list-ol' size={focused ? 30 : 25}
                            color={focused ? '#3a86ff' : 'grey'} />
                    ),
                }}
            />

            <Tab.Screen name="Flat List" component={flat1}
                options={{
                    title: 'Flat List',

                    tabBarIcon: ({ focused, size }) => (
                        <Icon2 name='list' size={focused ? 30 : 25}
                            color={focused ? '#3a86ff' : 'grey'} />
                    ),
                }}
            />
            <Tab.Screen name="Pagination" component={Pagination}
                options={{
                    title: 'Pagination',

                    tabBarIcon: ({ focused, size }) => (
                        <Icon3 name='page-multiple' size={focused ? 30 : 25}
                            color={focused ? '#3a86ff' : 'grey'} />
                    ),
                }}
            />
            <Tab.Screen name="Animation" component={Animation}
                options={{
                    title: 'Animation',

                    tabBarIcon: ({ focused, size }) => (
                        <Icon4 name='codesandbox' size={focused ? 30 : 25}
                            color={focused ? '#3a86ff' : 'grey'} />
                    ),
                }}
            />
            <Tab.Screen name="FadeInOutAnim" component={FadeInOutAnim}
                options={{
                    title: 'Animation2',

                    tabBarIcon: ({ focused, size }) => (
                        <Icon4 name='codesandbox' size={focused ? 30 : 25}
                            color={focused ? '#3a86ff' : 'grey'} />
                    ),
                }}
            />
            <Tab.Screen name="Login" component={Login}
                options={{
                    title: 'Redux',

                    tabBarIcon: ({ focused, size }) => (
                        <Icon name='redux' size={focused ? 30 : 25}
                            color={focused ? '#3a86ff' : 'grey'} />
                    ),
                }}
            />

            <Tab.Screen name="ImagesPage" component={ImagesPage}
                options={{
                    title: 'Images',

                    tabBarIcon: ({ focused, size }) => (
                        <Icon2 name='images' size={focused ? 30 : 25}
                            color={focused ? '#3a86ff' : 'grey'} />
                    ),
                }}
            />
        
        </Tab.Navigator>

    );
};
export default BottomNav;