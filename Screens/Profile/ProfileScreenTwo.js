import React from 'react';
import { signOut } from '../../assets/data/user';
import { useLogin } from '../../Context/LoginProvider';
import { View, SafeAreaView, StyleSheet, Button, ScrollView } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableOpacity,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreenTwo = (navigation) => {
  const { setIsLoggedIn, profile } = useLogin();
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Avatar.Image
            source={{
              uri:
                'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
            }}
            size={90}
          />
        </View>
        <View >
        </View>
      </View>


      {/* user */}

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="account" color="#000000" size={30} />
          <Text style={{ color: "#000000", marginLeft: 20, fontSize: 15 }}>{profile.fullname}</Text>
          {/* <Icon style= {{marginLeft:140}}name="chevron-right-circle-outline" color="#000000" size={30}/> */}
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#000000" size={30} />
          <Text style={{ color: "#000000", marginLeft: 20, fontSize: 15 }}>{profile.email}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#000000" size={30} />
          <Text style={{ color: "#000000", marginLeft: 20, fontSize: 15 }}>0859658818</Text>
        </View>
      </View>



      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Yêu thích</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="format-list-bulleted" color="#000000" size={25} />
            <Text style={styles.menuItemText}>Đơn hàng của tôi</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => setIsLoggedIn(false)}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreenTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 

  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',

  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    // fontWeight:'bold',
   fontFamily: 'Bungee Inline', 
  },
  fixToText: {
    justifyContent: 'space-between',
  },
});



