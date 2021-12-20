import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import IconUser from 'react-native-vector-icons/FontAwesome5';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import IconMenu from 'react-native-vector-icons/MaterialCommunityIcons';
import IconChat from 'react-native-vector-icons/Ionicons';
import IconHot from 'react-native-vector-icons/MaterialCommunityIcons';

//Navigator
import HomeNavigator from './HomeNavigator';
import ChatNavigator from './ChatNavigator';
import ProfileNavigator from './ProfileNavigator';
import MenuNavigator from './MenuNavigator';
import HotNavigator from './HotNavigator';
import TabViewChat from './TabViewChat';
import ChatScreen from '../Screens/User/Chat/ChatScreen';
import { useLogin } from '../Context/LoginProvider';
//stack
const Tab = createBottomTabNavigator();

const Main = ({ navigation }) => {
  const { isLoggedIn } = useLogin();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#8D6E63',
        tabBarStyle: {
          height: 55
        },
        tabBarLabelStyle: {
          fontSize: 14,
          margin: 0,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name="shop" color={color} size={30} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuNavigator}
        options={{
          tabBarIcon: ({ color }) => <IconMenu name="text-search" color={color} size={30} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Hot"
        component={HotNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <IconHot name="fire" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      {isLoggedIn ? (
        <>
          <Tab.Screen
            name="Chat"
            component={TabViewChat}
            options={{
              tabBarIcon: ({ color }) => (
                <IconChat name="chatbubble-ellipses-outline" color={color} size={30} />
              ),
              tabBarBadge: 1,
              title: 'Trò chuyện',
              headerStyle: {
                backgroundColor: '#8D6E63',
                borderColor: '#F5F5F5',
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                alignSelf: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
              },
              headerTitleAlign: 'center',
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="Chat"
            component={TabViewChat}
            options={{
              tabBarIcon: ({ color }) => (
                <IconChat name="chatbubble-ellipses-outline" color={color} size={30} />
              ),
              tabBarBadge: 3,
              title: 'Trò chuyện',
              headerStyle: {
                backgroundColor: '#8D6E63',
                borderColor: '#F5F5F5',
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                alignSelf: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
              },
              headerTitleAlign: 'center',
            }}
            listeners={{
              tabPress: (e) => {
                // Prevent default action
                e.preventDefault();
                //Any custom code here
                navigation.navigate('UserNavigator', { screen: 'Login' })
              },
            }}
          />
        </>
      )}

      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <IconUser name="user" color={color} size={30} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;


