import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
const Stack = createStackNavigator();

//screens
import HotScreen from '../Screens/Hot/HotScreen';
import CommentScreen from '../Screens/Hot/CommentScreen';
import PostScreen from '../Screens/Hot/PostScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostHistory from '../Screens/Hot/PostHistory';
import RepComment from '../Screens/Hot/RepComment';

const HotNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HotScreen"
        component={HotScreen}
        // options={{
        //   headerShown: false,
        // }
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1
          },
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: "#dbb98f" }}>HOT ArtWear</Text>
            // <Image source={logo} resizeMode="contain" style={{width: 135, height: 50}}/>
          ),
          headerLeft: () => (
            <Feather name="camera" style={{ marginLeft: 15 }} size={25} color={"#000"} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('PostHistory')}>
              <Ionicons name="paper-plane-outline" style={{ marginRight: 15 }} size={25} color={"#545454"} />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="Comment"
        component={CommentScreen}
        options={{
          headerShown: false,
        }}
        
      />
        <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          headerShown: false,
        }}
        
      />
       <Stack.Screen
        name="PostHistory"
        component={PostHistory}
        options={{
          headerShown: true,
        }}
        
      />
      <Stack.Screen
        name="RepComment"
        component={RepComment}
        options={{
          headerShown: false,
        }}
        
      />
    </Stack.Navigator>
  );
};

export default HotNavigator;
