import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//Screen
import ChatScreen from '../Screens/User/Chat/ChatScreen';
import ChatBot from '../Screens/User/Chat/ChatBot';

const Tab = createMaterialTopTabNavigator();
const TabViewChat = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                //Mau text khi bam vao
                tabBarActiveTintColor: 'brown',
                tabBarLabelStyle: {
                    fontSize: 15,
                    margin: 0,
                    fontWeight: 'bold',
                },
                // mau text mac dinh
                tabBarInactiveTintColor: 'black',
                // khi bam vao text hien khung mau
                tabBarPressColor: 'brown',
                // Màu bottom line của tabview
                tabBarIndicatorStyle: {
                    backgroundColor: "brown",
                    height: 4,
                },
            }}
        >
            <Tab.Screen
                component={ChatScreen}
                name='Tất cả'
            />
            <Tab.Screen
                component={ChatBot}
                name='Hỗ trợ'
            />

        </Tab.Navigator>
    );
};

export default TabViewChat;

